var ClioAccount = require('../models').ClioAccount;
var User = require('../models').Users;

exports.admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  var userIds = req.user.userIds;
  ClioAccount.in('_id', accountIds).exec(function(err,accounts, users) {
  	if (err) return;
  	users = User.find('_id', userIds);
    res.render('admin', { title: 'Admin', {accounts: accounts, users: users} });
  });
};

