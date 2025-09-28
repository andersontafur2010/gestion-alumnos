'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' }
  }, {});
  User.associate = function(models) {
    // 📌 añadida la relación con Course
    User.hasMany(models.Course, { foreignKey: 'userId' });
  };
  return User;
};
