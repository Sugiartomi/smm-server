'use strict';
const requests = require("../database/db_request.json")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    requests.forEach((e) => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Requests", requests, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Requests", null, {})
  }
};
