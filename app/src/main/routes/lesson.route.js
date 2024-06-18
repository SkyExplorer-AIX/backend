const express = require("express");
const router = express.Router();
const LessonController = require("../controllers/lesson.controller");
const {hasRole} = require("../middlewares/auth.middleware");

router.post("/create", LessonController.createLesson);
router.get("/", LessonController.getAllLessons);
router.get("/:lessonId", LessonController.getLessonById);
router.get("/instructor/:instructorId", LessonController.getLessonsByInstructor);
router.get("/student/:studentId", LessonController.getLessonsByStudent);
router.patch("/update/:lessonId", LessonController.updateLesson);
router.delete("/delete/:lessonId", LessonController.deleteLesson);

module.exports = router;