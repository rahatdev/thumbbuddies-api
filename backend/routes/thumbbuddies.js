'use strict';

const express = require('express'),
    router = express.Router(),
    passport = require('passport');

const Thumbbuddy = require('../models').thumbbuddy;
const User = require('../models').user;

// get thumbbuddy by id
router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //TODO
})

// search thumbbuddy
// put thumbbuddy //not for public
router.post('/create', passport.authenticate('jwt', {session: false}), (req, res, next) => {

})

// How is this admin role addressed - admin user?
// update thumbbuddy
router.post('/update/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //TODO
})

// assign thumbbuddy to new owner
router.post('/assign', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //TODO
})

