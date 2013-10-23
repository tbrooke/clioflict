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
  var user;
  user = new User ({email: req.body.email, 
        password: req.body.password, 
        admin: req.body.admin});
  user.save(function (err) {
    if (err) {
      res.statusCode=403;
      res.redirect('admin');
    } else {
      res.redirect('/');
    }
  });
};


exports.removeUser = function(req, res) {
  User.findByIdAndRemove(req.params.user_id, function(err) {
    if (err) console.log("error: ", err);
    res.redirect('admin');
  });
  // Query all users and remove user`
};