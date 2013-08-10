
/*
 * GET home page.
 */

	exports.index = function(req, res){
	  res.render('index', { title: 'Clio Conflict Checker' });
	};

	exports.query = function(req, res){
	  res.render('query', { title: 'New Query' })
	};

	exports.user = function(req, res){
	  res.render('user', { title: 'Users' })
	};

	exports.admin = function(req, res){
	  res.render('admin', { title: 'Admin' })
	};

	exports.setup_clio = function(req, res){
  res.render('setup_clio', { title: 'Setup Clio' });
  };

    exports.auth = function(req, res){
  res.render('auth', { title: 'Clio Authorization' });
  };

