
var express = require('express'),
    http = require('http'),
    path = require('path'),
    passport = require('passport'),
    flash = require('connect-flash'),
    stylus = require('stylus'),
    nib = require('nib');


require('./lib/db');
var mongoose = require('mongoose');

var SessionStore = require("session-mongoose")(express);
var store = new SessionStore({
    connection: mongoose.connection,
    //interval: 120000 // expiration check worker run interval in millisec (default: 60000)
    sweeper: false
});


var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}

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
  app.use(stylus.middleware({src: __dirname + '/public', compile: compile}));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.locals.navBarClasses = function(req, path) {
  if (req.path === path) {
    return ['active'];
  }
  return [];
};

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
io.set('log level', 1);
exports.streamable = require('streamable').streamable(io);

require('./lib/auth');
require('./routes')(app);
