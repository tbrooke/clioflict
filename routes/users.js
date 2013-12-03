var User = require('../models').User;

exports.edit = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    return res.render('users/edit', {
      title: 'Update User',
      flash: req.flash('error'),
      req:   req,
      user:  user
    });
  });
};

exports.update = function(req, res) {
  var user = {admin: req.body.admin};
  User.findByIdAndUpdate(req.params.user_id, user, function(err, user) {
    res.redirect('/admin');
  });
};