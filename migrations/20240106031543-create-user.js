'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NIK: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          notNull : {message : "NIK is required!"},
          notEmpty : {message : "NIK is required!"}
        }
      },
      nama: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          notNull : {message : "Name is required!"},
          notEmpty : {message : "Name is required!"}
        }
      },
      departemen: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          notNull : {message : "Department is required!"},
          notEmpty : {message : "Department is required!"}
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
          notNull : {message : "Password is required!"},
          notEmpty : {message : "Password is required!"}
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
    await queryInterface.dropTable('Users');
  }
};