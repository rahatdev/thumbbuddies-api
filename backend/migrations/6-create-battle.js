'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('battles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      player1: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key:'id'}
      },
      player2: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key:'id'}
      },
      winner: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.CHAR(8)
      },
      battleground: {
        type: Sequelize.INTEGER,
        references: {model: 'battlegrounds', key:'id'}
      },
      score: {
        type: Sequelize.SMALLINT
      },
      tournament: {
        type: Sequelize.INTEGER,
        references: {model: 'tournaments', key:'id'}
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