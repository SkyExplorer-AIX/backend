const User = require("../api/user/user.model");
const bcrypt = require("bcrypt");

const UserService = {
    createUser: async (reqBody) => {
        bcrypt.hash(reqBody.password, 10, (err, hash) => {
            if (err) {
                return { error: err };
            }
            const user = new User({ ...reqBody, password: hash });
            return user.save();
        });
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