'use strict';
module.exports = (sequelize, DataTypes) => {
  var tournament - participant = sequelize.define('tournament-participant', {
    tournament: DataTypes.INTEGER,
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
  return tournament - participant;
};