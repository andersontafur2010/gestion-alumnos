'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        id: 1,
        name: 'Mathematics 101',
        description: 'Basic math course',
        userId: 1,
        createdAt: new Date('2025-09-26 14:59:50'),
        updatedAt: new Date('2025-09-26 14:59:50')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
