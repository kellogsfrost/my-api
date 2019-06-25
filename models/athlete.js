'use strict';
module.exports = (sequelize, DataTypes) => {
  const athlete = sequelize.define('athlete', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    college: DataTypes.STRING
  }, {});
  athlete.associate = function(models) {
    // associations can be defined here
  };
  return athlete;
};