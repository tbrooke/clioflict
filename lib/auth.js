var passport = require('passport');
var User     = require('../models').User;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username, password: password }, function (err, user) {
      done(err, user);
    });
  }
));