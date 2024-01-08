'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goodsID: {
        type: Sequelize.INTEGER,
        references : { model : "Goods", key : "id"},
        onDelete : "cascade",
        onUpdate : "cascade",
        validate : {
          notNull : {msg : "Goods ID is required!"},
          notEmpty : {msg : "Goods ID is required!"}
        }
      },
      userID: {
        type: Sequelize.INTEGER,
        references : { model : "Users", key : "id"},
        onDelete : "cascade",
        onUpdate : "cascade",
        validate : {
          notNull : {msg : "User ID is required!"},
          notEmpty : {msg : "User ID is required!"}
        }
      },
      qty: {
        type: Sequelize.INTEGER,
        validate : {
          notNull : {msg : "Quantity is required!"},
          notEmpty : {msg : "Quantity is required!"}
        }
      },
      note: {
        type: Sequelize.STRING,
        validate : {
          notNull : {msg : "Note is required!"},
          notEmpty : {msg : "Note is required!"}
        }
      },
      status: {
        type: Sequelize.STRING,
        validate : {
          notNull : {msg : "Status is required!"},
          notEmpty : {msg : "Status is required!"}
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
    await queryInterface.dropTable('Requests');
  }
};