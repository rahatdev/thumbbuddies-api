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
router.post('/update', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let id = req.body.battleid
    let winner = Number.parseInt(req.body.winner)

    if (winner >= 0 && winner <= 2) {
        let status = ''
        if (winner === 0) status = 'DRAW'
        else status = 'WIN'

        Battle.update(
            { winner: winner, status: status },
            { where: { id: id } })
            .then(result => res.send({ success: true, result: result }))
            .catch(err => res.send({ success: false, msg: err.message }))
    } else {
        res.send({ success: false, msg: 'winner value must be 0, 1 or 2' });
    }



})

// battle-related metrics - tbd
// get/update scoreboard  
router.get('/leaderboard', (req, res, next) => {
    //TODO
})


function getLeaderboard(count){
    let limit = 99
    if(count) limit = count

    //aggregate by players with the most wins or score
    //TODO

}
