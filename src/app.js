require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes'); 
const studentRoutes = require('./routes/student.routes');
const courseRoutes = require('./routes/course.routes'); // ✅ nuevo

const app = express();

app.use(cors());
app.use(express.json());

// 📌 rutas públicas
app.use('/api/auth', authRoutes); // login y register

// 📌 rutas que necesitan autenticación
app.use('/api/students', studentRoutes); 
app.use('/api/courses', courseRoutes); // ✅ nuevo

// middleware de errores simple
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Error del servidor' });
});

module.exports = app;
