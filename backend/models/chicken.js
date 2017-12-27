'use strict';
module.exports = (sequelize, DataTypes) => {
  var chicken = sequelize.define('chicken', {
    chicken: DataTypes.STRING,
    weight: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return chicken;
};