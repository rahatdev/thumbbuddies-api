'use strict';

const express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    passport = require('passport');

const config = require('../config/db-config'),
      user = require('../models/user');



// get user
// authenticate user
// put user
router.post('/register', (req, res, next) => {
    
})
// update user
// recover lost password
// get user score

// get info from facebook api?


module.exports = router;