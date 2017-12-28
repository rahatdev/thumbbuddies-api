'use strict';

const express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    passport = require('passport');

const config = require('../config/db-config');
//const models = require('../models');
const User = require('../models').user;



// get user
router.get('/get', (req, res) => {
    console.log('Getting user...');
    // User.findOne().then((user) => {
    //     console.log(user);
    // })

    
    const user = User.build({
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
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        status: 'PEND'
    });
    

    User.createUser(newUser, (err, user) => {
        res.send(user);
    })

    //console.log(newUser);

   

})
// update user
// recover lost password
// get user score

// get info from facebook api?


module.exports = router;