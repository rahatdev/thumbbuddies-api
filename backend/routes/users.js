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

})

// authenticate user
router.post('/authenticate', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    //rewrite with promises?
    getUserByUsername(username, (err, user) => {
        if(err) {
            res.send({success: false, msg: 'Authentication error.'});
            handleErr(err);
            return;
        } 
        
        if(!user){
            res.send({success: false, msg: 'username not found'});
        } else {

        }

    })

})

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
        if (err) res.send({ success: false, msg: err.message });
        else res.send({ success: true, user: user });
    })

})
// update user
// recover lost password
// get user score

// get info from facebook api?

//TODO unit tests
function getUserByUsername(username, callback) {
    //console.log('entering getUserByUsername ...  with username: ' + username);
    User.findOne({ where: { username: username } })
        .then(user => {
            //console.log('then...  ' + user);
             callback(null, user);
             })
        .catch(err => { 
            //console.log('catch... ' + err);
            callback(err);
         });
}

function createUser(newUser, callback) {
   // console.log('entering create user...')
    // input validation
    if (!newUser.name) return new Error('Name is required');
    if (!newUser.username) return new Error('Username is required');
    if (!newUser.password) return new Error('Password is required');
    if (!newUser.email) return new Error('Email is required.');

    //would findOrCreate be better?
    getUserByUsername(newUser.username, (err, user) => {
        console.log('callback for getUserByUsername...');
        if (err) handleErr(err);
        if (!user) {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) handleErr;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => { callback(null, user) })
                        .catch(err => { callback(err) });
                })
            })
        } else {
            callback(new Error(newUser.username + ' already exists'));
        }
    })
}


function handleErr(err) {
    //TODO
    console.log('Error caught: ' + err.message);
}


module.exports = router;