const { Student } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const { firstName, lastName, email, age } = req.body;
    if (!firstName || !lastName || !email) return res.status(400).json({ message: 'Faltan campos' });

    const exists = await Student.findOne({ where: { email } });
    if (exists) return res.status(409).json({ message: 'Email de alumno ya registrado' });

    const student = await Student.create({ firstName, lastName, email, age });
    res.status(201).json(student);
  } catch (err) { next(err); }
};

exports.findAll = async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) { next(err); }
};

exports.findOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ message: 'Alumno no encontrado' });
    res.json(student);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ message: 'Alumno no encontrado' });

    await student.update(req.body);
    res.json(student);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ message: 'Alumno no encontrado' });

    await student.destroy();
    res.json({ message: 'Alumno eliminado' });
  } catch (err) { next(err); }
};
