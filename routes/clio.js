var clio = require('../lib/clioApi')


 var authorization_uri = clio.authorization_uri



exports.clioAuth = function(req, res) {
  return res.redirect(authorization_uri)};



 exports.callback = function (req, res) {
  var code = req.query.code;
  debugger;
  console.log('/callback');
  clio.OAuth2.AuthCode.getToken({
    code: code,
    grant_type: "authorization_code",
    redirect_uri: 'http://localhost:3000/callback',
    
  }, saveToken);

  function saveToken(error, result) {
    if (error) { console.log('Access Token Error', error.message); }
    token = clio.OAuth2.AccessToken.create(result);
  }
};

