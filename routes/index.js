
/*
 * GET home page.
 */

var auth = require('./auth');
var clio = require('./clio');
var User        = require('../models').User;
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var streamable = require('../app').streamable;

var ClioAccount = require('../models').ClioAccount;
var clioApi     = require('../lib/clio_api');

module.exports = function(app) {
	app.get('/', ensureLoggedIn('/login'), index);
  app.get('/accounts', ensureLoggedIn('/login'), accounts);
	app.get('/query', [ensureLoggedIn('/login'), streamable, query]);
  app.get('/query/:account_id', [ensureLoggedIn('/login'), streamable, accountQuery]);
	app.get('/admin', ensureLoggedIn('/login'), admin);
  app.get('/signup',  ensureLoggedIn('/login'), auth.signupForm);
  app.post('/signup', ensureLoggedIn('/login'), auth.signup);
	app.get('/login', auth.loginForm);
	app.post('/login', auth.login);
	app.get('/logout', auth.logout);
	app.get('/callback', clio.callback);
	app.get('/clioAuth', ensureLoggedIn('/login'), clio.clioAuth);
  app.get('/remove_account/:account_id', 
          ensureLoggedIn('/login'),
          clio.removeAccount);
  app.get('/remove_user/:user_id', 
          ensureLoggedIn('/login'),
          auth.removeUser);
};

var index = function(req, res) {
  res.render('index', { title: 'Clio Conflict Checker', req: req });
};

var accounts = function(req, res) {
  ClioAccount.find().
    where('_id').in(req.user.clioAccountIds).
    exec(function(err,accounts) {
      if (err) { console.log(err); }
      var accountsToSend = [];
      accounts.forEach(function(account) {
        accountsToSend.push({
          id: account['_id'],
          name: account.name
        });
      });

      res.send({accounts: accountsToSend});
    });
};

var query = function(req, res){
  var query = req.query.searchTerm;
  var totalAccounts, totalCompletedRequests = 0;

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
      totalCompletedRequests++;
      toSend = {account: account, results: response.body};
      res.write(JSON.stringify(toSend));
      if (totalCompletedRequests === totalAccounts) res.end();
    });
  };
};

var accountQuery = function(req, res){
  var accountId = req.params.account_id;
  var query = req.query.searchTerm;

  ClioAccount.findById(accountId).exec(function(err,account) {
    var options = {qs: {query: query}, headers: {ContentType: 'application/json'}};
    var request = clioApi.get(account.accessToken, '/contacts', options, function(err, response) {
      toSend = {account: account, results: response.body};
      res.send(toSend);
    });
  });
};

// var admin = function(req, res){
//   accountIds = req.user.clioAccountIds;
//   ClioAccount.find().in('_id', accountIds).exec(function(err,accounts) {
//     res.render('admin', { title: 'Admin', accounts: accounts, req: req });
//   });
// };


var admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  ClioAccount.find().in('_id', accountIds).exec(function(err,accounts) {
    User.find(function(err,users) {
      res.render('admin', { title: 'Admin', 
        accounts: accounts,
        users: users,
        req: req
      });
    });
  });
};
