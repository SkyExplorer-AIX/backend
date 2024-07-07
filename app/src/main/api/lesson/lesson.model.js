const mongoose = require("mongoose");

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