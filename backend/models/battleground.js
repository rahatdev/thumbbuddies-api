'use strict';
module.exports = (sequelize, DataTypes) => {
  var battleground = sequelize.define('battleground', {
    bgid: DataTypes.INTEGER,
    battleground: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return battleground;
};