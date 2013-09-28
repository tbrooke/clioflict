
	module.exports = function (app) { 


	// 404

	app.use(function(req, res, next) {
		res.status(404);


			if(req.accepts('html')) {
				return res.send("<h2>I'm Sorry but we can't find that page</h2>");
			}

			if(req.accepts('json')) {
				return res.json({ error: 'Not found'});	
			}

			res.type('txt')	;
			res.send("Hmmm, couldn't find that page");

	});

	// 500

	app.use(function(req,res,next) {
		console.error('error at %s\n', req.url, err);
			res.send(500, "Oops . . . ");
		});

		};
