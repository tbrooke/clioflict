var passport = require('passport');

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

exports.signupForm = function(req, res) {
	return res.render('signup', {title: 'Add User', flash: req.flash('error'), req: req})
};

exports.signup = function(req, res)