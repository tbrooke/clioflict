var passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User          = require('../models').User;

var failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
};



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
      else if (!user) { return done(null, false, {message: "Email not found"});} 
      else if (blockBrute(user, username, password, err, done)) {
       return done(null, false, {message: "Too many attempts"});
      }
      else if (!user.authenticate(password)) {
        return done(null, false, {message: "Password didn't match"});
      }
      done(null, user);
    });
  }
));



function incLoginAttempts(cb) {
  if (this.lockUntil  && this.lockUntil < Date.now()) {
    return this.update({
      $set: { loginAttempts: 1 },
      $unset: { lockUntil: 1}
    }, cb);
  }
  var updates = { $inc: {loginAttempts: 1 }};
  if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked)
    updates.$set = { lockUntil: Date.now() + LOCK_TIME};
};

function blockBrute(user, email, password, cb) {

        if (user.isLocked) {
            return user.incLoginAttempts(function(err) {
                // if (err) return cb(err);
                return cb(null, null, reasons.MAX_ATTEMPTS);
            });
          }
            // if (err) return cb(err);

            // check if the password was a match
            // if (isMatch) {
                // if there's no lock or failed attempts, just return the user
                if (!user.loginAttempts && !user.lockUntil) return cb(null, user);
                // reset attempts and lock info
                var updates = {
                    $set: { loginAttempts: 0 },
                    $unset: { lockUntil: 1 }
                };
                return user.update(updates, function(err) {
                    // if (err) return cb(err);
                    return cb(null, user);
                });

            // password is incorrect, so increment login attempts before responding
            user.incLoginAttempts(function(err) {
                // if (err) return cb(err);
                return cb(null, null, reasons.PASSWORD_INCORRECT);
            });
        // };
    };

