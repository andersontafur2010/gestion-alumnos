'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Alex',
        email: 'alexruiton2004@gmail.com',
        password: '$2b$10$hyn7pq5XpKTwaoLJHyDxcemNqOJ0xVE5SbwhcI.TYv5VeAiNgYgFS',
        role: 'user',
        createdAt: new Date('2025-09-20 16:15:29'),
        updatedAt: new Date('2025-09-20 16:15:29')
      },
      {
        id: 2,
        name: 'ETHAM',
        email: 'etham2021@gmail.com',
        password: '$2b$10$PpFrY6m/xdHYCEz6dLIc6OSfCiBuoH7SYKtxwsntTBqM53CS.juE.',
        role: 'user',
        createdAt: new Date('2025-09-26 12:39:35'),
        updatedAt: new Date('2025-09-26 12:39:35')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
