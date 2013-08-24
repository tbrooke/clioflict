var ClioAccount = require('../models').ClioAccount;
var User = require('../models').User;

exports.admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  userIds = reg.user.userIds;
  ClioAccount.in('_id', accountIds).exec(function(err,accounts) {
    res.render('admin', { title: 'Admin', accounts: accounts, req: req });
  });
  userIds.in('_id',userIds).exec(function(err,accounts){
  	res.render
  })
};

