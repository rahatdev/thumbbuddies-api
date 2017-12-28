'use strict';

const express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    passport = require('passport');

const config = require('../config/db-config');
const User = require('../models');



// get user
router.get('/get', (req, res) => {
    console.log('Getting user...');
    // User.findOne().then((user) => {
    //     console.log(user);
    // })
    const user = models.User.build({
        name: 'Test User',
        username: 'testuser',
        password: 'pass',
        email: 'test@user.com',
        status: 'INACTIVE'
    });

    user.save().then((newUser) => {
        console.log(newUser);
    })

})
// authenticate user
// put user
router.post('/register', (req, res, next) => {
    User.testMethod('this is a test message from users/register');    
})
// update user
// recover lost password
// get user score

// get info from facebook api?


module.exports = router;