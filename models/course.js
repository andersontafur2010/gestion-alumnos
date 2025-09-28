'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    // Mantengo nombres en inglés para que encaje con tus modelos actuales
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, allowNull: false } // 📌 añadido
  }, {});
  Course.associate = function(models) {
    // Un curso pertenece a un usuario
    // Relación con User (dueño del curso) y con Student
    Course.belongsTo(models.User, { foreignKey: 'userId' }); // curso pertenece a usuario
    // Un curso tiene muchos estudiantes
    Course.hasMany(models.Student, { foreignKey: 'courseId' }); // curso tiene estudiantes
  };
  return Course;
};
