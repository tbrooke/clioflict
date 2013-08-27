var ClioAccount = require('../models').ClioAccount;
var User = require('../models').User;

exports.admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  ClioAccount.in('_id', accountIds).exec(function(err,accounts) {
    res.render('admin', { title: 'Admin', accounts: accounts, req: req });
  });

// exports.user = function(req,res) {
// 	userIds = reg.userIds;
//     User.in('_id',userIds).exec(function(err,users){
//   	res.render('admin', { title: 'Admin', users: users, req: req });
//   });
};

