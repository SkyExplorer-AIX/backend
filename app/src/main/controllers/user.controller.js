const UserService = require("../services/user.service"); // Use the correct path to UserService

const UserController = {
    createUser: async (req, res) => {
        try {
            const createdUser = await UserService.createUser(req.body);
            if (createdUser.error) {
                return res.status(400).json(createdUser);
            }
            res.status(201).json(createdUser);
        } catch (error) {
            console.error("Error while creating user: ", error);
            return res.status(500).json({error: "An unexpected error occurred"});
        }
    },

    getUserByEmail: async (req, res) => {
        const foundUser = await UserService.getUserByEmail(req.body.email);
        if (foundUser.error) {
            return res.status(400).json(foundUser);
        }
        res.status(201).json(foundUser);
    },

    updateUser: async (req, res) => {
        const updatedUser = await UserService.updateUser(req.params.email, req.body);
        if (updatedUser.error) {
            return res.status(400).json(updatedUser);
        }
        res.status(201).json(updatedUser);
    },

    updateUserRole: async (req, res) => {
        const updatedUser = await UserService.updateUserRole(req.params.email, req.body.role);
        if (updatedUser.error) {
            return res.status(400).json(updatedUser);
        }
        res.status(201).json(updatedUser);
    },

    deleteUser: async (req, res) => {
        const deletedUser = await UserService.deleteUser(req.params.email);
        if (deletedUser.error) {
            return res.status(400).json(deletedUser);
        }
        res.status(201).json(deletedUser);
    },

    getAllUsers: async (req, res, next) => {
        try {
            const allUsers = await UserService.getAllUsers();
            console.log('Got all users', allUsers);
            res.status(200).json(allUsers);
        } catch (error) {
            console.log('Error in getAllUsers', error);
            return next(error);
        }
    }
};

module.exports = UserController;