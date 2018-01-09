'use strict'

const express = require('express')
const router = express.Router()
const passport = require('passport')

const Battle = require('../models').battle

// create/start battle
router.post('/new', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let p1 = req.body.player1
    let p2 = req.body.player2

    Battle.create({
        player1: p1,
        player2: p2,
        status: 'STARTED'
    })
        .then(battle => res.send({ success: true, battle: battle }))
        .catch(err => res.send({ success: false, msg: err.message }))
})



// update battle //declare winner

// battle-related metrics - tbd
// get/update scoreboard  
