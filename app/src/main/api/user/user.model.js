const mongoose = require("mongoose");
const {isEmail} = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

const baseField = {
    type: String,
    required: true,
    trim: true
};

const userSchema = mongoose.Schema({
    email: {
        ...baseField,
        unique: true,
        lowercase: true,
        validate: [isEmail],
    },
    password: baseField,
    firstName: {
        ...baseField,
        minlength: 3,
        maxlength: 20
    },
    lastName: {
        ...baseField,
        minlength: 3,
        maxlength: 20
    },
    phoneNumber: {
        ...baseField,
        minlength: 10,
        maxlength: 10
    },
    role: {
        type: String,
        required: false,
        trim: true,
        enum: ["admin", "staff", "instructor", "student"],
        default: "student"
    },
    address: {
        ...baseField,
        minlength: 10,
        maxlength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);