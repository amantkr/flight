'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
      {
        name:'Birla airport',
        cityId:9,
        createdAt: new Date(),
        updatedAt:  new Date()
      },
      {
        name:'Amant airport',
        cityId:10,
        createdAt: new Date(),
        updatedAt:  new Date()

      },
      {
        name:'Gulshan airport',
        cityId:1,
        createdAt: new Date(),
        updatedAt:  new Date()

      },
      {
        name:'Mantosh airport',
        cityId:10,
        createdAt: new Date(),
        updatedAt:  new Date()
      },
    ],{});



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
