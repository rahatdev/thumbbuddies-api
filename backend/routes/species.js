'use strict'

const express = require('express')
const router = express.Router()
const passport = require('passport')

const Species = require('../models').species



router.get('/get', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Species.findAll()
        .then(species => res.send({ success: true, species: species }))
        .catch(err => res.send({ success: false, msg: err.message }))
})

router.get('/get/:id', passport.authenticate({ session: false }), (req, res, next) => {
    let id = req.query.param1
    Species.findOne({ where: { id: id } })
        .then(species => res.send({ success: false, species: species }))
        .catch(err => res.send({ success: true, msg: err.message }))
})

// router.get('/search/:param', passport.authenticate({session: false}), (req, res, next) => {
//     let param = req.query.param1
//     Species.findAll({where: {species: param}})
// })

router.post('/create', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Species.create({
        species: req.body.name,
        description: req.body.description
    })
        .then(species => res.send({ success: true, species: species }))
        .catch(err => res.send({ success: false, msg: err.message }))
})

module.exports = router