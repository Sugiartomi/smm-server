'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Goods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        validate : {
          notNull : {msg : "Name of Goos is required!"},
          notEmpty : {msg : "Name of Goos is required!"}
        }
      },
      lokasi: {
        type: Sequelize.STRING,
        validate : {
          notNull : {msg : "Location is required!"},
          notEmpty : {msg : "Location is required!"}
        }
      },
      stock: {
        type: Sequelize.INTEGER,
        validate : {
          notNull : {msg : "Stock is required!"},
          notEmpty : {msg : "Stock is required!"}
        }
      },
      satuan: {
        type: Sequelize.STRING,
        validate : {
          notNull : {msg : "Scale is required!"},
          notEmpty : {msg : "Scale is required!"}
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Goods');
  }
};