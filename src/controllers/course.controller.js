const { Course, Student } = require('../../models');

// 📌 Crear curso ligado al usuario logueado
exports.createCourse = async (req, res) => {
  try {
    const { name, description } = req.body;
    // ⚠️ antes se pasaba userId en body, ahora usamos el usuario logueado
    const course = await Course.create({ 
      name, 
      description, 
      userId: req.user.id // 📌 cambio aquí
    });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📌 Listar SOLO cursos del usuario logueado
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      where: { userId: req.user.id }, // 📌 cambio aquí
      include: [Student]
    });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📌 Obtener curso por ID, validando que sea del usuario
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: { id: req.params.id, userId: req.user.id }, // 📌 cambio aquí
      include: [Student]
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
