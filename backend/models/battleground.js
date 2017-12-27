'use strict';
module.exports = (sequelize, DataTypes) => {
  var battleground = sequelize.define('battleground', {
    bgid: { type: Sequelize.INTEGER, primaryKey: true },
    battleground: DataTypes.STRING(150),
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