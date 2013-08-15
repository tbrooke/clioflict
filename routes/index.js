
/*
 * GET home page.
 */

var auth = require('./auth');
var user = require('./user');
var clio = require('./clio');


module.exports = function(app) {
	app.get('/', index);
	app.get('/users', user.list);
	app.get('/query', query);
	app.get('/admin', admin);
	app.get('/login', auth.loginForm);
	app.post('/login', auth.login);
	app.get('/logout', auth.logout);
	app.get('/callback', clio.callback);
	app.get('/clioAuth', clio.clioAuth);
}; 





var index = function(req, res){
  res.render('index', { title: 'Clio Conflict Checker' });
};

var query = function(req, res){
  res.render('query', { title: 'New Query' })
};

var admin = function(req, res){
  res.render('admin', { title: 'Admin' })
};
