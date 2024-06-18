const User = require('../api/user/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthService = {
    login: async (email, password) => {
        User.findOne({email: email}).then((user) => {
            if (!user) {
                return {error: 'User not found'};
            }
            bcrypt.compare(password, user.password).then((isMatch) => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    };
                    jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 3600}, (err, token) => {
                        return {success: true, token: `Bearer ${token}`, user: {id: user.id, email: user.email, role: user.role}};
                    });
                } else {
                    return {error: 'Incorrect password'};
                }
            });
        });
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