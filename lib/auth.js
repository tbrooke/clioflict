var passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User          = require('../models').User;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({usernameField: 'email'},
  function(username, password, done) {
    User.findOne({email: username}, function (err, user) {
      var message = null;

      if (err) { return done(err); }
      else if (!user) { return done(null, false, {message: "Email not found"}); }
      else if (!user.authenticate(password)) {
        return done(null, false, {message: "Password didn't match"});
      }
      done(null, user);
    });
  }
));