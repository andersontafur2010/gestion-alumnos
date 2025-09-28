'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        id: 1,
        firstName: 'RUITON-TAFUR',
        lastName: 'ALEX',
        email: 'alexruiton2004@gmail.com',
        age: 19,
        courseId: 1,
        createdAt: new Date('2025-09-20 16:40:22'),
        updatedAt: new Date('2025-09-20 16:58:32')
      },
      {
        id: 2,
        firstName: 'RUITON',
        lastName: 'ETHAM',
        email: 'etham@gmail.com',
        age: 6,
        courseId: null,
        createdAt: new Date('2025-09-20 17:05:53'),
        updatedAt: new Date('2025-09-20 17:05:53')
      },
      {
        id: 3,
        firstName: 'TAFUR',
        lastName: 'KIMBERLY',
        email: 'kymberly@gmail.com',
        age: 21,
        courseId: null,
        createdAt: new Date('2025-09-20 17:06:04'),
        updatedAt: new Date('2025-09-20 17:06:04')
      },
      {
        id: 5,
        firstName: 'SOFIA',
        lastName: 'ROYAL',
        email: 'sofyis@gmail.com',
        age: 16,
        courseId: null,
        createdAt: new Date('2025-09-26 12:38:39'),
        updatedAt: new Date('2025-09-26 19:28:42')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        id: 1,
        firstName: 'RUITON-TAFUR',
        lastName: 'ALEX',
        email: 'alexruiton2004@gmail.com',
        age: 19,
        courseId: 1,
        createdAt: new Date('2025-09-20 16:40:22'),
        updatedAt: new Date('2025-09-20 16:58:32')
      },
      {
        id: 2,
        firstName: 'RUITON',
        lastName: 'ETHAM',
        email: 'etham@gmail.com',
        age: 6,
        courseId: null,
        createdAt: new Date('2025-09-20 17:05:53'),
        updatedAt: new Date('2025-09-20 17:05:53')
      },
      {
        id: 3,
        firstName: 'TAFUR',
        lastName: 'KIMBERLY',
        email: 'kymberly@gmail.com',
        age: 21,
        courseId: null,
        createdAt: new Date('2025-09-20 17:06:04'),
        updatedAt: new Date('2025-09-20 17:06:04')
      },
      {
        id: 5,
        firstName: 'SOFIA',
        lastName: 'ROYAL',
        email: 'sofyis@gmail.com',
        age: 16,
        courseId: null,
        createdAt: new Date('2025-09-26 12:38:39'),
        updatedAt: new Date('2025-09-26 19:28:42')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
