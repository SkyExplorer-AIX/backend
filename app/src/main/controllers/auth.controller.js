const AuthService = require('../services/auth.service');

const AuthController = {
    login: async (req, res) => {
        const {email, password} = req.body;
        const result = await AuthService.login(email, password);
        if (result.error) {
            res.status(401).json(result);
        } else {
            res.json(result);
        }
    },

    verifyToken: async (req, res) => {
        const token = req.headers.authorization;
        const result = await AuthService.verifyToken(token);
        if (result.error) {
            res.status(401).json(result);
        } else {
            res.json(result);
        }
    }
};

module.exports = AuthController;