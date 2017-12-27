/*
TODO:

What is a good way to structure the dB layer?
- should all gets/puts be on the model or on a separate layer/file?
- how much logic should be on the db (sp/functions) and how much on the node server?
- should an ORM be used or a more tactile driver?

*/

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