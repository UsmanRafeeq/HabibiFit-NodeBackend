'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddExercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AddExercises.init({
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
    filename: DataTypes.STRING,
    videoname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AddExercises',
  });
  return AddExercises;
};