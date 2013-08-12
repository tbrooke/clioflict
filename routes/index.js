
/*
 * GET home page.
 */

var auth = require('./auth');
var user = require('./user');


module.exports = function(app) {
	app.get('/', index);
	app.get('/users', user.list);
	app.get('/query', query);
	app.get('/admin', admin);
	app.get('/login', auth.loginForm);
	app.post('/login', auth.login)
	app.post('/logout', auth.logout);
}

var index = function(req, res){
  res.render('index', { title: 'Clio Conflict Checker' });
};

var query = function(req, res){
  res.render('query', { title: 'New Query' })
};

var admin = function(req, res){
  res.render('admin', { title: 'Admin' })
};
