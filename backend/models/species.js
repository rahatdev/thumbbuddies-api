'use strict';
module.exports = (sequelize, DataTypes) => {
  var species = sequelize.define('species', {
    speciesid: { type: Sequelize.SMALLINT, primaryKey: true },
    species: DataTypes.STRING(50),
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return species;
};