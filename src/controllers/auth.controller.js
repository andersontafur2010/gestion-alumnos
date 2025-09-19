const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const { signToken } = require('../utils/jwt');

const saltRounds = 10;

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Faltan campos' });

    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(409).json({ message: 'Email ya registrado' });

    const hashed = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ name, email, password: hashed });

    const userJson = user.toJSON();
    delete userJson.password;

    res.status(201).json({ user: userJson });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Faltan campos' });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Credenciales inválidas' });

    const token = signToken({ id: user.id, email: user.email, role: user.role });
    const userJson = user.toJSON();
    delete userJson.password;

    res.json({ token, user: userJson });
  } catch (err) {
    next(err);
  }
};
