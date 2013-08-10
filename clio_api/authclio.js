// Clio OAuth2
// Based in twitter Oauth Example:
//      https://github.com/mikeal/request
//
//  Also See:
//      https://github.com/andreareginato/simple-oauth2
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


// Set the configuration settings


var credentials = {
  clientID: 'qgRdVxi60UATe1JlaDBr3KWfNbOaLB0Ce2Ehzdnk',                         //  App Key   
  clientSecret: 'td3MSYAa4jr8oplIsCTIiseSL8FwCJyRwbjjkjJN',                     //  App Secret
  site: 'https://app.goclio.com',
  authorizationPath: '/oauth/authorize',
  tokenPath: '/oauth/token'
};

// Initialize the OAuth2 Library

var OAuth2 = require('simple-oauth2')(credentials);


// Authorization OAuth2 URI
var authorization_uri = OAuth2.AuthCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
});


// Initial page redirecting to Clio

app.get('/auth', function (req, res) {
    res.redirect(authorization_uri);
});

// Callback service parsing the authorization token and asking for the access token

app.get('/callback', function (req, res) {
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
});

app.get('/', function (req, res) {
  res.send('Hello World');
});










// var qs = require('querystring')
//   , oauth =
//     { callback: 'https://app-goclio-com-3godkmdzjjjb.runscope.net/'
//     , consumer_key: CONSUMER_KEY
//     , consumer_secret: CONSUMER_SECRET
//     }
//   , url = 'https://app.goclio.com/oauth/authorize/'
//   ;
// request.post({url:url, oauth:oauth}, function (e, r, body) {
  
//   // Ideally, you would take the body in the response
//   // and construct a URL that a user clicks on (like a sign in button).
//   // The verifier is only available in the response after a user has 
//   // verified with clio that they are authorizing your app.

//   var access_token = qs.parse(body)
//     , oauth = 
//       { consumer_key: CONSUMER_KEY
//       , consumer_secret: CONSUMER_SECRET
//       , token: access_token.oauth_token
//       , verifier: access_token.oauth_verifier
//       }
//     , url = 'https://app.goclio.com/oauth/token'
//     ;
//   request.post({url:url, oauth:oauth}, function (e, r, body) {
//     var perm_token = qs.parse(body)
//       , oauth = 
//         { consumer_key: CONSUMER_KEY
//         , consumer_secret: CONSUMER_SECRET
//         , token: perm_token.oauth_token
//         , token_secret: perm_token.oauth_token_secret
//         }
//       , url = 'https://api.twitter.com/1/users/show.json?'
//       , params = 
//         { screen_name: perm_token.screen_name
//         , user_id: perm_token.user_id
//         }
//       ;
//     url += qs.stringify(params)
//     request.get({url:url, oauth:oauth, json:true}, function (e, r, user) {
//       console.log(user)
//     })
//   })
// })