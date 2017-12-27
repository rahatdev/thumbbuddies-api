'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('battles', {
      battleid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player1: {
        type: Sequelize.INTEGER
      },
      player2: {
        type: Sequelize.INTEGER
      },
      winner: {
        type: Sequelize.SMALLINT
      },
      status: {
        type: Sequelize.CHAR(8)
      },
      battleground: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.SMALLINT
      },
      tournament: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('battles');
  }
};