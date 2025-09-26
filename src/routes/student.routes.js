const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// todas requieren tok

router.post('/', studentController.create);
router.get('/', studentController.findAll);
router.get('/:id', studentController.findOne);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.remove);

module.exports = router;

