'use strict';
const { hashPass, comparePass } = require('../helpers/bcrypt')
const users = require("../database/db_user.json")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    users.forEach((e) => {
      e.password = hashPass(e.password);
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
