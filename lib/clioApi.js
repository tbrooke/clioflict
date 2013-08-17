
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
var url ='https://app-goclio-com-3godkmdzjjjb.runscope.net/'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body)
  }
})


 var clioClientId = 'qgRdVxi60UATe1JlaDBr3KWfNbOaLB0Ce2Ehzdnk';
 var clioClientSecret = 'td3MSYAa4jr8oplIsCTIiseSL8FwCJyRwbjjkjJN';

var OAuth2 = require('simple-oauth2')({
  clientID: clioClientId,
  clientSecret: clioClientSecret,
  site: url,
});

exports.OAuth2 = OAuth2

// Authorization uri definition
var authorization_uri = OAuth2.AuthCode.authorizeURL({ 
  redirect_uri: 'https://3godkmdzjjjb.runscope.net/callback', 
  tokenPath: '/oauth/token'          
});

exports.authorization_uri = authorization_uri

// // Initial page redirecting to Github
// app.get('/clioAuth', function (req, res) {
//     res.redirect(authorization_uri);
// });

// Callback service parsing the authorization token and asking for the access token
