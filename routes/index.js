
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Clio Conflict Checker' });
};

exports.about = function(req, res){
  res.render('query', { title: 'New Query' })
};

exports.about = function(req, res){
  res.render('user', { title: 'Users' })
};