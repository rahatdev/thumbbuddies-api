'use strict';

const express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    bcrypt = require('bcryptjs');

const config = require('../config/db-config');
//const models = require('../models');
const User = require('../models').user;
//const TBerror = require('../models/tberror').TBerror; //TODO custom error



// get user
router.get('/profile/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let id = req.query.param1;
    console.log("id - " + id);
    User.findById(id)
    .then(user => {
        res.send({ success: true, user: user});
    })
    .catch(err => {
        res.send({success: false, msg: err.message});
    })
})

// authenticate user
// TODO limit to x number of tries per hour for single user
router.post('/authenticate', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    //rewrite with promises?
    getUserByUsername(username, (err, user) => {
        if (err) {
            res.send({ success: false, msg: 'Authentication error.' });
            handleErr(err);
            return;
        }

        if (!user) {
            res.send({ success: false, msg: 'username not found' });
        } else {
            comparePassword(password, user.password, (err, isMatch) => {
                if (err) {
                    res.send({ success: false, msg: 'Authentication error.' });
                    handleErr(err);
                    return;
                }

                if (isMatch) {
                    const token = jwt.sign({ data: user }, config.secret, { expiresIn: 3600 });
                    res.send({
                        success: true,
                        msg: 'Login successful',
                        token: 'JWT ' + token,
                        user: {
                            id: user.id,
                            name: user.name,
                            username: user.username,
                            email: user.email,
                            facebook: user.facebook,
                            twitter: user.twitter,
                            instagram: user.instagram
                        }
                    })
                } else {
                    res.send({ success: false, msg: 'Password did not match' });
                }
            })
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

    //TODO hanlde user errors approprately - some errors need to be reported back to user
    //  such as username already exists. Others, such as backend connection errors,
    //  should have a generic message.
    createUser(newUser, (err, user) => {
        if (err) res.send({ success: false, msg: err.message}); //handleErr(err); //TODO only display certain messages
        else res.send({ success: true, user: user });
    })

})

// update user
router.post('/update/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //TODO
})
// recover lost password
// get user score

// get info from facebook api?
// sign in with google or facebook

//TODO unit tests
function getUserByUsername(username, callback) {
    //console.log('entering getUserByUsername ...  with username: ' + username);
    User.findOne({ where: { username: username } })
        .then(user => {
            callback(null, user);
        })
        .catch(err => {
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

function comparePassword(enteredPassword, hash, callback) {
    bcrypt.compare(enteredPassword, hash, (err, isMatch) => {
        if (err) handleErr(err);
        else callback(null, isMatch);
    })
}


function handleErr(err) {
    //TODO
    console.log('Error caught: ' + err.message);
    // if(err.type === 'tb') {
    //     console.log('Error type is indeed tb');
     //   res.send({success: false, msg: err.message});
    // } else {
    //     console.log('err type is not tb');
    // }
}


module.exports = router;