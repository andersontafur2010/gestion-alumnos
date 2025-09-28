const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const auth = require("../middlewares/auth.middleware"); // 📌 añadido

// 📌 protegemos las rutas con auth
router.post("/", auth, courseController.createCourse);
router.get("/", auth, courseController.getCourses);
router.get("/:id", auth, courseController.getCourseById);

module.exports = router;
