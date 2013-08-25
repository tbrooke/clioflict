var User     = require('../models').User;
var passport = require('passport');
var request = require('request');

exports.loginForm = function(req, res) {
  return res.render('login', {title: 'Login', flash: req.flash('error'), req: req});
};

exports.login = passport.authenticate('local', { successRedirect: '/',
                         failureRedirect: '/login',
                         failureFlash: true });

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};


exports.signupForm = function(req,res) {
	return res.render('signup', {title: 'Sign Up New User', flash: req.flash('error'), req: req});
};

exports.signup = function (req, res) {
    new User ({email: req.body.email, 
    		password: req.body.password, 
    		admin: req.body.admin}).save();
};


// exports.create = function (req, res) {
//   var user = new User(req.body)
//   user.provider = 'local'
//   user.save();
//     };