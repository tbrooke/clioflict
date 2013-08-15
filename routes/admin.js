

exports.admin = function(req, res){
  res.render('admin', { title: 'Admin' });
};

app.put('/admin', function(req, res) { 
  if (req.body.authorize == 'authorize') return res.redirect('/clioAuth'); 
}); 