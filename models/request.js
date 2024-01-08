'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.belongsTo(models.User, {foreignKey : "userID"})
      Request.belongsTo(models.Goods, {foreignKey : "goodsID"})
    }
  }
  Request.init({
    goodsID: DataTypes.NUMBER,
    userID: DataTypes.NUMBER,
    qty: DataTypes.NUMBER,
    note: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};