'use strict';
module.exports = (sequelize, DataTypes) => {
  const Battle = sequelize.define('battle', {
    //battleid: { type: Sequelize.BIGINT, primaryKey: true },
    player1id: DataTypes.INTEGER, //FK
    player2id: DataTypes.INTEGER, //FK
    winner: DataTypes.SMALLINT, // 1=player1, 2=player2, 0=none 
    status: DataTypes.CHAR(8),
    bgid: DataTypes.INTEGER, //FK
    score: DataTypes.SMALLINT,
    tournamentid: DataTypes.INTEGER  //FK
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Battle.belongsTo(models.Battleground, { foreignKey: 'bgid'});
        Battle.belongsTo(models.User, {foreignKey: 'player1id'});
        Battle.belongsTo(models.User, {foreignKey: 'player2id'});
        Battle.belongsTo(models.Tournament, {foreignKey: 'tournamentid'});
      }
    }
  });
  return Battle;
};