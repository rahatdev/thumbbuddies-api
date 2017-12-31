'use strict';

const express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    bcrypt = require('bcryptjs');

const config = require('../config/db-config');
//const models = require('../models');
const User = require('../models').user;



// get user
router.get('/get', (req, res) => {
    console.log('Getting user...');
    // User.findOne().then((user) => {
    //     console.log(user);
    // })


    // const user = User.build({
    //     name: 'Test User',
    //     username: 'testuser',
    //     password: 'pass',
    //     email: 'test@user.com',
    //     status: 'INACTIVE'
    // });

    // user.save().then((newUser) => {
    //     console.log(newUser);
    // })

})
// authenticate user
// put user
router.post('/register', (req, res, next) => {
    let newUser = User.build({
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

    //res.send({success: false, user: newUser});

    createUser(newUser, (err, user) => {
        if (err) res.send({ success: false, msg: err })
        res.send({ success: true, user: user });
    })

    //console.log(newUser);



})
// update user
// recover lost password
// get user score

// get info from facebook api?

//TODO unit tests
function getUserByUsername(username, callback) {
    console.log('entering getUserByUsername ...  with username: ' + username);
    User.findOne({ where: { username: username } })
        .then(user => { callback(null, user); })
        .catch((err) => { callback(err) });
}

function createUser(newUser, callback) {
    console.log('entering create user...')
    // input validation
    if (!newUser.name) return new Error('Name is required');
    if (!newUser.username) return new Error('Username is required');
    if (!newUser.password) return new Error('Password is required');
    if (!newUser.email) return new Error('Email is required.');

    console.log('past input validation...');
    //would findOrCreate be better?
    getUserByUsername(newUser.username, (err, user) => {
        console.log('callback for getUserByUsername...');
        if (err) handleErr(err);
        if (!user) {
            bcrypt.genSalt(10, (err, salt) => {
                console.log('salt is ' + salt);
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    console.log('hash is ' + hash);
                    if (err) handleErr;
                    newUser.password = hash;
                    newUser.save().then(callback);
                })
            })

        } else {
            return new Error('Username already exists');
        }
    })
}


function handleErr(err) {
    //TODO
    console.log(err.message);
}


module.exports = router;