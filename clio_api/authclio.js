// Clio OAuth2
// Based in twitter Oauth Example:
//      https://github.com/mikeal/request
//
//  Clio Auth urls
//
// Authorization endpoint: https://app.goclio.com/oauth/authorize/
//
// Token endpoint: https://app.goclio.com/oauth/token
//
// Access Token location: Authorization header w/ Bearer prefix


var qs = require('querystring')
  , oauth =
    { callback: 'https://app-goclio-com-3godkmdzjjjb.runscope.net/'
    , consumer_key: CONSUMER_KEY
    , consumer_secret: CONSUMER_SECRET
    }
  , url = 'https://app.goclio.com/oauth/authorize/'
  ;
request.post({url:url, oauth:oauth}, function (e, r, body) {
  // Ideally, you would take the body in the response
  // and construct a URL that a user clicks on (like a sign in button).
  // The verifier is only available in the response after a user has 
  // verified with twitter that they are authorizing your app.
  var access_token = qs.parse(body)
    , oauth = 
      { consumer_key: CONSUMER_KEY
      , consumer_secret: CONSUMER_SECRET
      , token: access_token.oauth_token
      , verifier: access_token.oauth_verifier
      }
    , url = 'https://app.goclio.com/oauth/token'
    ;
  request.post({url:url, oauth:oauth}, function (e, r, body) {
    var perm_token = qs.parse(body)
      , oauth = 
        { consumer_key: CONSUMER_KEY
        , consumer_secret: CONSUMER_SECRET
        , token: perm_token.oauth_token
        , token_secret: perm_token.oauth_token_secret
        }
      , url = 'https://api.twitter.com/1/users/show.json?'
      , params = 
        { screen_name: perm_token.screen_name
        , user_id: perm_token.user_id
        }
      ;
    url += qs.stringify(params)
    request.get({url:url, oauth:oauth, json:true}, function (e, r, user) {
      console.log(user)
    })
  })
})