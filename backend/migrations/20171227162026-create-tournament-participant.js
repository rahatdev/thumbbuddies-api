'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tournamentparticipants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tournamentid: {
        type: Sequelize.INTEGER,
        references: {model: 'tournaments', key: 'id'}
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'}
      },
      registrationdate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.CHAR(8)
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
    return queryInterface.dropTable('tournament-participants');
  }
};