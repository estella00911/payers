'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Payers', [{
      payer: 'DANNON',
      points: 5000,
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      payer: 'UNILEVER',
      points: 200,
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
