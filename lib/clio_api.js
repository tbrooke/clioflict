var request = require('request');
var _ = require('lodash');

//var baseUrl = 'https://app-goclio-com-ukwn42x8ympw.runscope.net';
var baseUrl = 'https://app.goclio.com';
var versionUrl = '/api/v2';

var methods = ['get', 'post', 'put', 'delete'];

methods.forEach(function(reqType) {
  exports[reqType] = function(accessToken, url, options, callback) {
    var headers = {Authorization: "Bearer " + accessToken};
    var options = _.merge(options, {uri: baseUrl + versionUrl + url, headers: headers});

    if (callback) {
      return request[reqType](options, callback)
    }
    // For streaming responses
    return request[reqType](options)
  };
});