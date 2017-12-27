'use strict';
module.exports = (sequelize, DataTypes) => {
  var battle = sequelize.define('battle', {
    battleid: { type: Sequelize.BIGINT, primaryKey: true },
    player1: DataTypes.INTEGER,
    player2: DataTypes.INTEGER,
    winner: DataTypes.SMALLINT,
    status: DataTypes.CHAR(8),
    battleground: DataTypes.INTEGER,
    score: DataTypes.SMALLINT,
    tournament: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return battle;
};