var ClioAccount = require('../models').ClioAccount;
var User = require('../models').Users;

exports.admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  userIds = req.user.userIds;
  ClioAccount.in('_id', accountIds).exec(function(err,accounts) {
    res.render('admin', { title: 'Admin', accounts: accounts, req: req });
  });
  User.find('_id',userIds).exec(function(err, users){
  	return res.{ users: users, req: req });
  });
};

