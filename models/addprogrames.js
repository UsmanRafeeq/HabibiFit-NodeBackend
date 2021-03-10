'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddProgrames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AddProgrames.init({
    name: DataTypes.STRING,
    days: DataTypes.INTEGER,
    types: DataTypes.STRING,
    description: DataTypes.STRING,
    filename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AddProgrames',
  });
  return AddProgrames;
};