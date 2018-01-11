'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tournament = sequelize.define('tournament', {
    tournament: DataTypes.STRING(150),
    bgid: DataTypes.INTEGER, //FK
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Tournament.belongsTo(models.Battleground, { foreignKey: 'bgid'});
      }
    }
  });
  return Tournament;
};