'use strict';
module.exports = (sequelize, DataTypes) => {
  var tournament = sequelize.define('tournament', {
    tournamentid: { type: Sequelize.INTEGER, primaryKey: true },
    tournament: DataTypes.STRING(150),
    battleground: DataTypes.INTEGER,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tournament;
};