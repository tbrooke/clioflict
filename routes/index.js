
/*
 * GET home page.
 */

var auth = require('./auth');
var users = require('./users');
var clio = require('./clio');
var User = require('../models').User;
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var streamable = require('../app').streamable;

var ClioAccount = require('../models').ClioAccount;
var clioApi     = require('../lib/clio_api');

var ensureAdmin = function(req, res, next) {
  if (req.user.admin) {
    next();
  } else {
    res.send(401, 'You do not have access to this page');
  }
};

var csrf = function(req, res, next) {
  res.locals.token = req.session._csrf;
  next();
};

module.exports = function(app) {
	app.get('/', ensureLoggedIn('/login'), index);
	app.get('/query', [ensureLoggedIn('/login'), streamable, query]);
  app.get('/query/:account_id', [ensureLoggedIn('/login'), streamable, accountQuery]);
	app.get('/login', csrf, auth.loginForm);
	app.post('/login', auth.login);
	app.get('/logout', auth.logout);
	app.get('/callback', clio.callback);
	app.get('/clioAuth', ensureLoggedIn('/login'), clio.clioAuth);
  app.get('/accounts', ensureLoggedIn('/login'), accounts);

  // Admin routes
  app.get('/admin', ensureLoggedIn('/login'), ensureAdmin, admin);
  app.get('/signup', ensureLoggedIn('/login'), ensureAdmin, csrf, auth.signupForm);
  app.post('/signup', ensureLoggedIn('/login'), ensureAdmin, auth.signup);
  app.get('/users/:user_id/edit', ensureLoggedIn('/login'), ensureAdmin, csrf, users.edit);
  app.put('/users/:user_id', ensureLoggedIn('/login'), ensureAdmin, users.update);

  app.get('/remove_account/:account_id', 
          ensureLoggedIn('/login'),
          ensureAdmin,
          clio.removeAccount);
  app.get('/remove_user/:user_id', 
          ensureLoggedIn('/login'),
          ensureAdmin,
          auth.removeUser);
};

var index = function(req, res) {
  res.render('index', { title: 'Clio Conflict Checker', req: req });
};

var accounts = function(req, res) {
  ClioAccount.find().
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

  ClioAccount.find().exec(function(err,accounts) {
                debugger;
                accounts.forEach(function(account) {
                  searchForClients(account, query);
                });
              });

  function searchForClients(account, query) {
    var options = {qs: {query: query}, headers: {ContentType: 'application/json'}};
    var request = clioApi.get(account.accessToken, '/contacts', options, function(err, response) {
      totalCompletedRequests++;
      // wish that we could just check the response.statusCode
      // unfortunately, clio sends back a 200 along with an html
      // version of the login page. FTW!
      try {
        debugger;
        JSON.parse(response.body);
        toSend = {account: account, results: response.body};
        res.write(JSON.stringify(toSend));
      } catch(e) {
        handleAccountError(account);
      }
      if (totalCompletedRequests === totalAccounts) res.end();
    });
  };

  function handleAccountError(account) {
    var errorMessage = 'The ' + account.name + ' account requires authentication'
    toSend = {account: account, errors: [errorMessage]};
    res.write(JSON.stringify(toSend));
    account.authenticationRequired = true;
    account.save();
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


var admin = function(req, res) {
  ClioAccount.find().exec(function(err,accounts) {
    User.find(function(err,users) {
      res.render('admin', { title: 'Admin', 
        accounts: accounts,
        users: users,
        req: req
      });
    });
  });
};

