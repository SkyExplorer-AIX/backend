const LessonService = require('../services/lesson.service');

/**
 * The LessonController handles requests related to lessons.
 *
 * @namespace LessonController
 */
const LessonController = {
    createLesson: async (req, res) => {
        const createdLesson = await LessonService.createLesson(req.body);
        res.status(201).json(createdLesson);
    },

    getAllLessons: async (req, res) => {
        const lessons = await LessonService.getAllLessons();
        res.json(lessons);
    },

    getLessonById: async (req, res) => {
        const lesson = await LessonService.getLessonById(req.params.lessonId);
        res.json(lesson);
    },

    getLessonsByInstructor: async (req, res) => {
        const lessons = await LessonService.getLessonsByInstructor(req.params.instructorId);
        res.json(lessons);
    },

    getLessonsByStudent: async (req, res) => {
        const lessons = await LessonService.getLessonsByStudent(req.params.studentId);
        res.json(lessons);
    },

    updateLesson: async (req, res) => {
        const updatedLesson = await LessonService.updateLesson(req.params.lessonId, req.body);
        res.json(updatedLesson);
    },

    deleteLesson: async (req, res) => {
        await LessonService.deleteLesson(req.params.lessonId);
        res.status(204).send();
    },
};

module.exports = LessonController;