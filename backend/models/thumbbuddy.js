'use strict';
module.exports = (sequelize, DataTypes) => {
  var thumbbuddy = sequelize.define('thumbbuddy', {
    tbid: DataTypes.INTEGER,
    thumbbuddy: DataTypes.STRING(50),
    species: DataTypes.SMALLINT,
    user: DataTypes.INTEGER,
    color: DataTypes.STRING(50),
    status: DataTypes.CHAR(8)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return thumbbuddy;
};