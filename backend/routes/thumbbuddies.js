'use strict';

const express = require('express'),
    router = express.Router(),
    passport = require('passport');

//const Models = require('../models')
const Thumbbuddy = require('../models').thumbbuddy;
const User = require('../models').user;
const Species = require('../models').species;

// get thumbbuddy by id
router.get('/get/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //TODO
    let id = req.query.param1;
    Thumbbuddy.findById(id)
        .then(thumbbuddy => {
            res.send({ success: true, tb: thumbbuddy });
        })
        .catch(err => {
            handleErr(err);
            res.send({ success: false, msg: err.message });
        })
})

// search thumbbuddy
// put thumbbuddy //not for public
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res, next) => {

})

// How is this admin role addressed - admin user?
// update thumbbuddy
router.post('/update/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //TODO
})

// assign thumbbuddy to new owner
router.post('/assign', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //TODO
})

//TODO - actually handle the error
function handleErr(err) {
    console.log('Error caught: ' + err);
}