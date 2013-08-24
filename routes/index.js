
/*
 * GET home page.
 */

var auth = require('./auth');
var clio = require('./clio');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var ClioAccount = require('../models').ClioAccount;
var clioApi     = require('../lib/clio_api');

module.exports = function(app) {
	app.get('/', ensureLoggedIn('/login'), index);
	app.get('/query', ensureLoggedIn('/login'), query);
	app.get('/admin', ensureLoggedIn('/login'), admin);
	app.get('/login', auth.loginForm);
	app.post('/login', auth.login);
	app.get('/logout', auth.logout);
	app.get('/callback', clio.callback);
	app.get('/clioAuth', ensureLoggedIn('/login'), clio.clioAuth);
  app.get('/remove_account/:account_id', 
          ensureLoggedIn('/login'),
          clio.removeAccount);
};

var index = function(req, res){
  res.render('index', { title: 'Clio Conflict Checker', req: req });
};

var query = function(req, res){
  var query = req.query.searchTerm;

  ClioAccount.find().
              where('_id').in(req.user.clioAccountIds).
              exec(function(err,accounts) {
                accounts.forEach(function(account) {
                  searchForClients(account, query);
                });
              });

  function searchForClients(account, query) {
    var options = {qs: {query: query}, headers: {ContentType: 'application/json'}};
    var request = clioApi.get(account.accessToken, '/contacts', options, function(err, response) {
      if (err) return res.send(err);
      toSend = {account: account, results: response.body};
      return res.send(toSend);
    });
  };
};

var admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  ClioAccount.find().in('_id', accountIds).exec(function(err,accounts) {
    res.render('admin', { title: 'Admin', accounts: accounts, req: req });
  });
};
