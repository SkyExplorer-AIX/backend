const mongoose = require("mongoose");
const {isEmail} = require("validator");
const uniqueValidator = require("mongoose-unique-validator");

/**
 * Represents a base field with specific properties.
 *
 * @typedef {Object} BaseField
 * @property {String} type - The data type of the field.
 * @property {boolean} required - Indicates if the field is required.
 * @property {boolean} trim - Indicates if leading and trailing whitespace should be trimmed.
 */
const baseField = {
    type: String,
    required: true,
    trim: true
};

/**
 * The userSchema defines the structure of a user document in a MongoDB collection.
 *
 * @typedef {Object} UserSchema
 * @property {Object} email - The user's email field.
 * @property {Object} password - The user's password field.
 * @property {Object} firstName - The user's first name field.
 * @property {Object} lastName - The user's last name field.
 * @property {Object} phoneNumber - The user's phone number field.
 * @property {String} role - The user's role field.
 * @property {Object} address - The user's address field.
 * @property {Date} createdAt - The date the user document was created.
 *
 * @property {Object} baseField - A base field object containing shared properties.
 * @property {Boolean} baseField.unique - A flag indicating if the field value is unique.
 * @property {Boolean} baseField.lowercase - A flag indicating if the field value should be converted to lowercase.
 * @property {Function} baseField.validate - A validation function to validate the field value.
 *
 * @property {Number} firstName.minlength - The minimum length of the first name value.
 * @property {Number} firstName.maxlength - The maximum length of the first name value.
 *
 * @property {Number} lastName.minlength - The minimum length of the last name value.
 * @property {Number} lastName.maxlength - The maximum length of the last name value.
 *
 * @property {Number} phoneNumber.minlength - The minimum length of the phone number value.
 * @property {Number} phoneNumber.maxlength - The maximum length of the phone number value.
 *
 * @property {String[]} role.enum - An array of allowed role values.
 * @property {String} role.default - The default role value.
 *
 * @property {Number} address.minlength - The minimum length of the address value.
 * @property {Number} address.maxlength - The maximum length of the address value.
 *
 * @property {Date} createdAt.default - The default value for the createdAt field.
 */
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