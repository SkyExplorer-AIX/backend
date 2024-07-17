const User = require('../api/user/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * AuthService is responsible for handling user authentication and token verification.
 * @namespace AuthService
 */
const AuthService = {
    login: async (email, password) => {
        const user = await User.findOne({email: email});
        if (!user) {
            return {
                status: 404,
                error: 'User not found'
            };
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const payload = {
                id: user.id,
                email: user.email,
                role: user.role
            };
            const token = await new Promise((resolve, reject) => {
                jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 3600}, (err, token) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(token);
                    }
                });
            });
            return {success: true, token: `Bearer ${token}`, user: {id: user.id, email: user.email, role: user.role}};
        } else {
            return {
                status: 401,
                error: 'Incorrect password'
            };
        }
    },

    verifyToken: async (token) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return {error: err};
            }
            return {success: true, user: decoded};
        });
    }
}

module.exports = AuthService;