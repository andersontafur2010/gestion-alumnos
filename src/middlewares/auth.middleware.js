const jwt = require('jsonwebtoken');
const { User } = require('../../models');

module.exports = async function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ message: 'No token provisto' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // opcional: cargar usuario desde DB
    const user = await User.findByPk(decoded.id, { attributes: { exclude: ['password'] }});
    if (!user) return res.status(401).json({ message: 'Usuario no existe' });

    req.user = user; //📌 Aquí estará disponible el id del usuario en los controladores
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};
