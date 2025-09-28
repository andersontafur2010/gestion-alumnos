const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// todas requieren token

// crear estudiante dentro de un curso
router.post('/', studentController.create);

// listar todos los estudiantes (de todos los cursos del usuario)
router.get('/', studentController.findAll);

// obtener un estudiante por id
router.get('/:id', studentController.findOne);

// actualizar un estudiante
router.put('/:id', studentController.update);

// eliminar un estudiante
router.delete('/:id', studentController.remove);

module.exports = router;
