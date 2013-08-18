// Based in twitter Oauth Example:
//      https://github.com/mikeal/request
//
//  Also See:
//
// https://github.com/ciaranj/node-oauth
//
//  Clio Auth urls
//
// Authorization endpoint: https://app.goclio.com/oauth/authorize/
//
// Token endpoint: https://app.goclio.com/oauth/token
//
// Access Token location: Authorization header w/ Bearer prefix
//
// Auth Appproval:  https://app.goclio.com/oauth/approval

var request = require('request');
var passport = require('passport');

var ClioAccount = require('../models').ClioAccount;

//var url ='https://app-goclio-com-3godkmdzjjjb.runscope.net/'
var url ='https://app-goclio-com-ukwn42x8ympw.runscope.net'
var myUrl = 'https://callcenter1.fwd.wf';

var clioClientId = 'qgRdVxi60UATe1JlaDBr3KWfNbOaLB0Ce2Ehzdnk';
var clioClientSecret = 'td3MSYAa4jr8oplIsCTIiseSL8FwCJyRwbjjkjJN';

var OAuth2 = require('simple-oauth2')({
  clientID: clioClientId,
  clientSecret: clioClientSecret,
  site: url,
  authorizationPath: "/oauth/authorize",
  tokenPath: "/oauth/token"
});

exports.OAuth2 = OAuth2

// Authorization uri definition

var authorizationUri = OAuth2.AuthCode.authorizeURL({ 
  redirect_uri: myUrl + '/callback', 
});

exports.clioAuth = function(req, res) {
  return res.redirect(authorizationUri);
};

exports.callback = function (req, res) {
  var code = req.query.code;
  console.log('/callback', code);
  OAuth2.AuthCode.getToken({
    code: code,
    grant_type: "authorization_code",
    client_id: clioClientId,
    client_secret: clioClientSecret,
    redirect_uri: myUrl + '/callback'
    
  }, saveToken);

  function saveToken(error, result) {
    if (error) { console.log('Access Token Error', error.message); }
    ClioAccount.setupAccount(result.access_token, function(err) {
      res.render('index');
    })
  }
};
