'use strict';

var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');

module.exports = function(passport) {
  passport.use('basic', new BasicStrategy(
    function(email, password, done) {
      User.findOne({'basic.email': email}, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, 'access error');

        if (!user.validPassword(password)) return done(null, 'access error');
        return done(null, user);
      });
    })
  );
};
