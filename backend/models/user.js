'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    userid: { type: Sequelize.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING,
    datejoined: DataTypes.DATE,
    status: DataTypes.CHAR(8)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};


/*
How do you add foreign keys?

Can you change char/cvarchar limits?

Can you / should you change the id
*/