'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    age: { type: DataTypes.INTEGER }
  }, {});
  Student.associate = function(models) {
    // Asociaciones: cada estudiante pertenece a un course (courseId)
    Student.belongsTo(models.Course, { foreignKey: 'courseId' });
    // si ya tienes otras asociaciones mantenerlas aquí también
  };
  return Student;
};
