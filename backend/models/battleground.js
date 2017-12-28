'use strict';
module.exports = (sequelize, DataTypes) => {
  var Battleground = sequelize.define('battleground', {
    battleground: DataTypes.STRING(150),
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Battleground;
};