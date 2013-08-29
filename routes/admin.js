var ClioAccount = require('../models').ClioAccount;
var User = require('../models').Users;

exports.admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  var users = req.user.User;
  ClioAccount.in('_id', accountIds).exec(function(err,accounts, users) {
  	if (err) return;
    res.render('admin', { title: 'Admin', {accounts: accounts, users: users} });
  });
};

