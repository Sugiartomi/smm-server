"use strict"
const goods = require("../database/db_goods.json")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    goods.forEach((e) => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Goods", goods, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Goods", null, {})
  },
}
