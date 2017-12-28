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
      thumbbuddy: {
        type: Sequelize.STRING(50)
      },
      species: {
        type: Sequelize.SMALLINT,
        references: {model: 'species', key: 'id'}
      },
      user: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'}
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