'use strict';
const user = module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },  //DataTypes.STRING(100),
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING(150),
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING,
    status: DataTypes.CHAR(8) //Should this be Sequelize.ENUM?
    // status: {
    // type: Sequelize.ENUM,
    // values: ['ACTIVE', 'INACTIVE', 'UNVERIFIED', 'FLAGGED']
    //}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
      }
    }
  });
  return User;
};

// module.exports.getUserById = (id) => {
//   return new Promise((resolve, reject) => {
//     //TODO
//   })
// }

/*
How do you add foreign keys?

Can you change char/cvarchar limits?

Can you / should you change the id
*/