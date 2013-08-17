

exports.admin = function(req, res){
  res.render('admin', { title: 'Admin' });
   if (req.body.authorize == 'authorize') return res.redirect('/clioAuth'); 
};

