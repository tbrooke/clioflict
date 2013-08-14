


exports.clioAuth = function(req, res) {
  return res.redirect(authorization_uri)};

 exports.callback = function (req, res) {
  var code = req.query.code; 
  console.log('/callback');
  OAuth2.AuthCode.getToken({
    code: code,
    redirect_uri: 'http://localhost:3000/callback'
  }, saveToken);

  function saveToken(error, result) {
    if (error) { console.log('Access Token Error', error.message); }
    token = OAuth2.AccessToken.create(result);
  }
};








//   app.get('/callback', function (req, res) {
//   var code = req.query.code; 
//   console.log('/callback');
//   OAuth2.AuthCode.getToken({
//     code: code,
//     redirect_uri: 'http://localhost:3000/callback'
//   }, saveToken);

//   function saveToken(error, result) {
//     if (error) { console.log('Access Token Error', error.message); }
//     token = OAuth2.AccessToken.create(result);
//   }
// });

