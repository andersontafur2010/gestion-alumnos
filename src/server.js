require('dotenv').config();
const app = require('./app');
const { sequelize } = require('../models');

const PORT = process.env.PORT || 5000;

// 🔎 DEBUG: ver si .env carga bien
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS ? "****" : "(vacío)");
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_HOST:", process.env.DB_HOST);

async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos OK');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
  } catch (err) {
    console.error('❌ No se pudo conectar a la base de datos:', err);
    process.exit(1);
  }
}

start();
