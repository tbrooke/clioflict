var ClioAccount = require('../models').ClioAccount;

exports.admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  ClioAccount.in('_id', accountIds).exec(function(err,accounts) {
    res.render('admin', { title: 'Admin', accounts: accounts, req: req });
  });
};

