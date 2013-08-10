


var request = require('request');
request.get('https://app-goclio-com-3godkmdzjjjb.runscope.net/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});