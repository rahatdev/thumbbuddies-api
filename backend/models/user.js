'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING(100),
    password: DataTypes.String(50),
    email: DataTypes.STRING(150),
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING,
    status: DataTypes.CHAR(8)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
      }
    }
  });
  return User;
};


/*
How do you add foreign keys?

Can you change char/cvarchar limits?

Can you / should you change the id
*/