
/*
 * GET home page.
 */

var auth = require('./auth');
var user = require('./user');
var clio = require('./clio');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var ClioAccount = require('../models').ClioAccount;

module.exports = function(app) {
	app.get('/', index);
	app.get('/query', ensureLoggedIn('/login'), query);
	app.get('/admin', ensureLoggedIn('/login'), admin);
	app.get('/login', auth.loginForm);
	app.post('/login', auth.login);
	app.get('/logout', auth.logout);
	app.get('/callback', clio.callback);
	app.get('/clioAuth', ensureLoggedIn('/login'), clio.clioAuth);
};

var index = function(req, res){
  res.render('index', { title: 'Clio Conflict Checker', req: req });
};

var query = function(req, res){
  res.render('query', { title: 'New Query', req: req });
};

var admin = function(req, res){
  accountIds = req.user.clioAccountIds;
  ClioAccount.find().in('_id', accountIds).exec(function(err,accounts) {
    res.render('admin', { title: 'Admin', accounts: accounts, req: req });
  });
};
