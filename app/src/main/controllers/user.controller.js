const UserService = require("../services/user.service"); // Use the correct path to UserService

const UserController = {
    createUser: async (req, res) => {
        const createdUser = await UserService.createUser(req.body);
        res.status(201).json(createdUser);
    },

    getUserByEmail: async (req, res) => {
        const foundUser = await UserService.getUserByEmail(req.params.email);
        res.json(foundUser);
    },

    updateUser: async (req, res) => {
        const updatedUser = await UserService.updateUser(req.params.email, req.body);
        res.json(updatedUser);
    },

    updateUserRole: async (req, res) => {
        const updatedUser = await UserService.updateUserRole(req.params.email, req.body.role);
        res.json(updatedUser);
    },
};

module.exports = UserController;