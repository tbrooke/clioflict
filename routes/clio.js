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
var User        = require('../models').User;

//var url ='https://app-goclio-com-3godkmdzjjjb.runscope.net/'
//var url ='https://app-goclio-com-ukwn42x8ympw.runscope.net'
var url = 'https://app.goclio.com';
var myUrl = 'https://6a432a90.ngrok.com';

var clioClientId = 'qgRdVxi60UATe1JlaDBr3KWfNbOaLB0Ce2Ehzdnk';
var clioClientSecret = 'td3MSYAa4jr8oplIsCTIiseSL8FwCJyRwbjjkjJN';

var OAuth2 = require('simple-oauth2')({
  clientID: clioClientId,
  clientSecret: clioClientSecret,
  site: url,
  authorizationPath: "/oauth/authorize",
  tokenPath: "/oauth/token"
});

exports.clioAuth = function(req, res) {
  var userId = req.user.id;

  return res.redirect(OAuth2.AuthCode.authorizeURL({
    redirect_uri: myUrl + '/callback',
    state: userId
  }));
};

exports.callback = function (req, res) {
  var code = req.query.code;
  var userId = req.query.state;

  OAuth2.AuthCode.getToken({
    code: code,
    grant_type: "authorization_code",
    client_id: clioClientId,
    client_secret: clioClientSecret,
    redirect_uri: myUrl + '/callback'
  }, saveToken);

  function saveToken(error, result) {
    console.log(result);
    if (error) { console.log('Access Token Error', error.message); }

    User.findById(userId, function(err, user) {
      if (err) console.log("error: ", err);
      ClioAccount.setupAccount(result.access_token, user, function(err) {
        res.redirect('admin');
      });
    })
  }
};

exports.removeAccount = function(req, res) {
  ClioAccount.findByIdAndRemove(req.params.account_id, function(err) {
    if (err) console.log("error: ", err);
    res.redirect('admin');
  });
  // Query all users and remove clioAccountId
};