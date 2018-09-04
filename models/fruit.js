'use strict';
module.exports = (sequelize, DataTypes) => {
  const fruit = sequelize.define('fruit', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  fruit.associate = function(models) {
    // associations can be defined here
  };
  return fruit;
};