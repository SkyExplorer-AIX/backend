const Lesson = require("../api/user/lesson.model");

const LessonService = {
    createLesson: async (reqBody) => {
        const lesson = new Lesson(reqBody);
        return lesson.save();
    },

    getAllLessons: async () => {
        return Lesson.find();
    },

    getLessonById: async (lessonId) => {
        return Lesson.findById(lessonId);
    },

    getLessonsByInstructor: async (instructorId) => {
        return Lesson.find({instructor: instructorId});
    },

    getLessonsByStudent: async (studentId) => {
        return Lesson.find({student: studentId});
    },

    updateLesson: async (lessonId, updatedDetails) => {
        return Lesson.updateOne({_id: lessonId}, {$set: updatedDetails});
    },

    deleteLesson: async (lessonId) => {
        return Lesson.deleteOne({_id: lessonId});
    },
};

module.exports = LessonService;