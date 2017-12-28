'use strict';
module.exports = (sequelize, DataTypes) => {
  var TournamentParticipant = sequelize.define('tournamentparticipant', {
    //tournament: { type: Sequelize.INTEGER, primaryKey: true },
    //user: DataTypes.INTEGER,
    registrationdate: DataTypes.DATE,
    status: DataTypes.CHAR(8)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        TournamentParticipant.belongsTo(models.User, {foreignKey: 'userid'});
        TournamentParticipant.belongsTo(models.Tournament, {foreignKey: 'tournamentid'});
      }
    }
  });
  return TournamentParticipant;
};