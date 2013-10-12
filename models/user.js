var mongoose = require('mongoose');
var crypto   = require('crypto');

MAX_LOGIN_ATTEMPTS = 3;
LOCK_TIME = 2 * 60 * 60 * 1000;

var userSchema = mongoose.Schema({
  email: { type: String, required: true, index: {unique: true}},
  hashedPassword: String,
  salt: String,
  loginAttempts: { type: Number, required: true, default: 0},
  lockUntil: {type: Number},
  authenticationToken: { type: String, index: {unique: true} },
  resetToken: String,
  clioAccountIds: [String]
});

userSchema.plugin(require('mongoose-lifecycle'));

userSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
}); 
  

userSchema.virtual('password').set(function(password){
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  }).get(function(){ return this._password; });

    
userSchema.virtual('authenticate').get(function(email,hashedPassword,err) {

        if (err) throw err;

        // login was successful if we have a user
        if (user) {
            // handle login success
            console.log('login success');
            return;
        }

        // otherwise we can determine why we failed
        var reasons = User.failedLogin;
        switch (reason) {
            case reasons.NOT_FOUND:
            case reasons.PASSWORD_INCORRECT:
                // note: these cases are usually treated the same - don't tell
                // the user *why* the login failed, only that it did
                break;
            case reasons.MAX_ATTEMPTS:
                 return done(null, false, { message: 'To Many Attempts Try again later ' }); 
                break; }
        }
    });


// .set(function(passwordConfirmation){
//     this._passwordConfirmation = passwordConfirmation;
//   }).get(function(){ return this._passwordConfirmation; });

userSchema.methods.authenticate = function(plainText) {
  return this.encryptPassword(plainText) === this.hashedPassword;
};

userSchema.statics.failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
};

userSchema.methods.incLoginAttempts = function(cb) {
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

userSchema.statics.getAuthenticated = function(email, hashedPassword, cb) {
    this.findOne({ email: email }, function(err, user) {
        if (err) return cb(err);

        // make sure the user exists
        if (!user) {
            return cb(null, null, reasons.NOT_FOUND);
        }

        // check if the account is currently locked
        if (user.isLocked) {
            // just increment login attempts if account is already locked
            return user.incLoginAttempts(function(err) {
                if (err) return cb(err);
                return cb(null, null, reasons.MAX_ATTEMPTS);
            });
          }
         // test for a matching password
        user.comparePassword(password, function(err, isMatch) {
            if (err) return cb(err);

            // check if the password was a match
            if (isMatch) {
                // if there's no lock or failed attempts, just return the user
                if (!user.loginAttempts && !user.lockUntil) return cb(null, user);
                // reset attempts and lock info
                var updates = {
                    $set: { loginAttempts: 0 },
                    $unset: { lockUntil: 1 }
                };
                return user.update(updates, function(err) {
                    if (err) return cb(err);
                    return cb(null, user);
                });

            // password is incorrect, so increment login attempts before responding
            user.incLoginAttempts(function(err) {
                if (err) return cb(err);
                return cb(null, null, reasons.PASSWORD_INCORRECT);
            });
        };
    });
  });
};


userSchema.methods.makeSalt = function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
};

userSchema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

userSchema.methods.generateResetToken = function(done) {
  var shasum = require('crypto').createHash('sha512');
  shasum.update(this.password + ":" + this.salt);
  this.resetToken = shasum.digest('base64');
  this.save(function(err,user){
    if(err) return done(err,null);
    return done(null,user);
  });
};

var User = mongoose.model('User', userSchema);

User.on('beforeInsert', function(user){
  var shasum = require('crypto').createHash('sha512');
  // Not the most secure, could possibly be improved
  shasum.update(user.email + ":" + user.salt);
  user.authenticationToken = shasum.digest('base64');
});

module.exports = User;