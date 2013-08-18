
var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    passport = require('passport'),
    flash = require('connect-flash');


require('./lib/db');
var mongoose = require('mongoose');

var SessionStore = require("session-mongoose")(express);
var store = new SessionStore({
    connection: mongoose.connection,
    interval: 120000 // expiration check worker run interval in millisec (default: 60000)
});


var app = express();

// all environments
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('short'));
  app.use(flash());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
    secret: '48hgU2kykg97LKEipHoK',
    cookie: {maxAge: new Date(Date.now() + 3600000)},
    store: store,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./lib/auth');
require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
