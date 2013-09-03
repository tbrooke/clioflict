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

exports.signup = function (req, res) {
  var user;
  user = new User ({email: req.body.email, 
        password: req.body.password, 
        admin: req.body.admin});
  user.save(function (err) {
    if (!err) {
      res.statusCode=403;
    } else {
      res.redirect('/');
    }
  });

     res.redirect('/');
};

