var mongoose = require('mongoose');
var crypto   = require('crypto');

MAX_LOGIN_ATTEMPTS = 10;
LOCK_TIME = 2 * 60 * 60 * 1000;

var userSchema = mongoose.Schema({
  email: { type: String, required: true, index: {unique: true}},
  hashedPassword: String,
  salt: String,
  loginAttempts: { type: number, required: true, default: 0},
  lockUntil: {type: Number},
  authenticationToken: { type: String, index: {unique: true} },
  resetToken: String,
  clioAccountIds: [String]
});

userSchema.plugin(require('mongoose-lifecycle'));

userSchema.virtual('isLocked').get(function) {
  return !!(this.lockUntil && this.lockUntil > Date.now());
}); 
  

userSchema.virtual('password').set(function(password){
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  }).get(function(){ return this._password; });

userSchema.virtual('passwordConfirmation').set(function(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  }).get(function(){ return this._passwordConfirmation; });

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