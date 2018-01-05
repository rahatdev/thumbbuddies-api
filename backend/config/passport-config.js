'user strict';

const ExtractJwt = require('passport-jwt').ExtractJwt,
    JwtStrategy = require('passport-jwt').Strategy;

const User = require('../models').user,
    config = require('../config/db-config');

module.exports = (passport) => {
    // console.log('Checking passport')
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
    opts.secretOrKey = config.secret
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        //console.log(jwt_payload)
        User.findOne({ where: { id: jwt_payload.data.id } })
            .then(user => {
                if (user) return done(null, user)
                else return done(null, false)
            })
            .catch(err => {
                return done(err, false)
            })

    }))
}