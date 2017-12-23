const ExtractJwt = require('passport-jwt').ExtractJwt,
    JwtStrategy = require('passport-jwt').Strategy,
    User = require('../models/user'),
    config = require('../config/db-config')

module.exports = (passport) => {
   // console.log('Checking passport')
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
    opts.secretOrKey = config.secret
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        //console.log(jwt_payload)
        User.getUserByID(jwt_payload.data._id, (err, user) => {
            if(err) return done(err, false)
            if(user) return done(null, user)
            else return done(null, false)
        })
    }))
}