'use strict';

const express = require('express')
const router = express.Router()
const passport = require('passport')

const Battleground = require('../models').battleground

router.post('/new', passport('jwt', { session: false }), (req, res, next) => {
    let bg = req.body.name
    let location = req.body.location  //verify location against maps api

    Battleground.create({
        battleground: bg,
        location: location
    })
        .then(bg => res.send({ success: true, battleground: bg }))
        .catch(err => res.send({ success: false, msg: err.message }))
})

// Do these routes need to be protected?
router.get('/get', passport('jwt', { session: false }), (req, res, next) => {
    Battleground.findAll()
        .then(bgs => res.send({ success: true, battlegrounds: bgs }))
        .catch(err => res.send({ success: false, msg: err.message }))
})

router.get('/get/:id', passport('jwt', { session: false }), (req, res, next) => {
    let id = req.query.param1

    Battleground.findOne({ where: { id: id } })
        .then(bg => res.send({ success: true, battleground: bg }))
        .catch(err => res.send({ success: false, err: err.message }))
})

//get location within radius


module.exports = router