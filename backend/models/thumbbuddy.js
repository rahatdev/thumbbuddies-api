'use strict';
module.exports = (sequelize, DataTypes) => {
  var Thumbbuddy = sequelize.define('thumbbuddy', {
    thumbbuddy: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    //speciesid: DataTypes.SMALLINT,
    //userid: DataTypes.INTEGER,
    color: DataTypes.STRING(50),
    status: DataTypes.CHAR(8)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Thumbbuddy.belongsTo(models.Species, {foreignKey: 'speciesid'});
        Thumbbuddy.belongsTo(models.User, {foreignKey: 'userid'});
      }
    }
  });
  return Thumbbuddy;
};