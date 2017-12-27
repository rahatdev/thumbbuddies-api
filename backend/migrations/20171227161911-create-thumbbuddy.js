'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('thumbbuddies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tbid: {
        type: Sequelize.INTEGER
      },
      thumbbuddy: {
        type: Sequelize.STRING(50)
      },
      species: {
        type: Sequelize.SMALLINT
      },
      user: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING(50)
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
    return queryInterface.dropTable('thumbbuddies');
  }
};