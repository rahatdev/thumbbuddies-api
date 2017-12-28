'use strict';
module.exports = (sequelize, DataTypes) => {
  var species = sequelize.define('species', {
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