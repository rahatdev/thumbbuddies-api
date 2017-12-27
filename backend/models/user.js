'use strict';

'use strict';
 
const Sequelize = require('sequelize');

const config = require('../config/db-config');
//TODO - client may need to be factored out
const pgClient = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'postgres'
});

const User = pgClient.define('user', {
    userid: { type: Sequelize.INTEGER, primaryKey: true },
    username: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING}
})


User.sync().then(() => {
    console.log('Postgres connection ready.');
});

module.exports = User;