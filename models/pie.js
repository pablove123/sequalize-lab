'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pie.init({
    name: DataTypes.STRING,
    sweet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pie',
  });
  return Pie;
};