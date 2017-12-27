'use strict';
module.exports = (sequelize, DataTypes) => {
  var tournamentParticipant = sequelize.define('tournament-participant', {
    tournament: { type: Sequelize.INTEGER, primaryKey: true },
    user: DataTypes.INTEGER,
    registrationdate: DataTypes.DATE,
    status: DataTypes.CHAR(8)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tournamentParticipant;
};