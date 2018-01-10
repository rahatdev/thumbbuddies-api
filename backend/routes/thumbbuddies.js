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
    //TODO - join with species and user
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
    let newThumbbuddy = Thumbbuddy.build({
        thumbbuddy: req.body.tbname,
        color: req.body.color, //should this be a factor of the species?
        status: 'NEW'
    });

    createThumbbuddy(newThumbbuddy)
        .then(thumbbuddy => {
            res.send({ success: true, thumbbuddy: thumbbuddy });
        }).catch(err => {
            res.send({ success: false, msg: err.message });
        })

})

// How is this admin role addressed - admin user?
// update thumbbuddy
router.post('/update/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    //TODO
})

// assign thumbbuddy to new owner
router.post('/assign', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let userid = req.body.userid;
    let tbid = req.body.tbid;

    User.findOne({ where: { id: userid } })
        .then(user => {
            if (!user) throw new Error('User does not exist')
            else
                Thumbbuddy.update(
                    { userid: userid, status: 'OWNED' },
                    { where: { id: tbid } })
                    .then(tb => res.send({ success: true, thumbbuddy: tb }))

        })
        .catch(err => res.send({ success: false, msg: err.message }))
})


//================== internal methods =====================

function createThumbbuddy(newThumbbuddy) {
    return new Promise((resolve, reject) => {
        // input validation 

        newThumbbuddy.save()
            .then(resolve(newThumbbuddy))
            .catch(reject(err));
    })
}

//not needed
function addThumbbuddy(userid, thumbbuddyid) {
    return new Promise((resolve, reject) => {

        Thumbbuddy.update(
            { userid: userid, status: 'OWNED' },
            { where: { id: thumbbuddyid } })
            .then(result => {
                //console.log('result...')
                //console.log(result)
                resolve(result)
            }).catch(err => {
                reject(err)
            })
    })
}


//TODO - actually handle the error
function handleErr(err) {
    console.log('Error caught: ' + err);
}


module.exports = router;