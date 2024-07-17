const mongoose = require("mongoose");

/**
 * Mongoose schema for a Lesson.
 *
 * @typedef {Object} LessonSchema
 * @property {mongoose.Schema.Types.ObjectId} instructor - The ID of the instructor for the lesson. Required.
 * @property {mongoose.Schema.Types.ObjectId} student - The ID of the student for the lesson. Required.
 * @property {Date} lessonDate - The date of the lesson. Required.
 * @property {string} type - The type of the lesson. Required. Possible values are "lesson", "event", and "hobby". Default is "lesson".
 * @property {string} status - The status of the lesson. Optional. Possible values are "pending" and "completed". Default is "pending".
 * @property {boolean} paid - Indicates whether the lesson has been paid for. Required. Default is false.
 * @property {Date} createdAt - The creation date of the lesson. Default is the current date.
 */
const lessonSchema = mongoose.Schema({
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    lessonDate: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["lesson", "event", "hobby"],
        default: "lesson"
    },
    status: {
        type: String,
        required: false,
        enum: ["pending", "completed"],
        default: "pending"
    },
    paid: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Lesson", lessonSchema);