var ClioAccount = require('../models').ClioAccount;
var User = require('../models').Users;

exports.admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  users = req.User.find();
  ClioAccount.in('_id', accountIds).exec(function(err,accounts, users) {
  	if (err) return;
    res.render('admin', { title: 'Admin', {accounts: accounts, users: users} });
  });
};

