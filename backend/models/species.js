'use strict';
module.exports = (sequelize, DataTypes) => {
  var Species = sequelize.define('species', {
    species: DataTypes.STRING(50),
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Species;
};