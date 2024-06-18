const User = require("../api/user/user.model"); // Use the correct path to your User model

const UserService = {
    createUser: async (reqBody) => {
        const user = new User(reqBody);
        return user.save();
    },

    getUserByEmail: async (email) => {
        return User.findOne({ email });
    },

    updateUser: async (email, updatedDetails) => {
        return User.updateOne({ email }, { $set: updatedDetails });
    },

    updateUserRole: async (email, newRole) => {
        return User.updateOne({ email }, { $set: { role: newRole } });
    },
};

module.exports = UserService;