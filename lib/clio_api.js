var request = require('request');

var baseUrl = 'https://app-goclio-com-ukwn42x8ympw.runscope.net'
var versionUrl = '/api/v1'

var methods = ['get', 'post', 'put', 'delete'];

methods.forEach(function(reqType) {
  exports[reqType] = function(accessToken, url, callback) {
    var headers = {Authorization: "Bearer " + accessToken};
    var options = {uri: baseUrl + versionUrl + url, headers: headers};

    if (callback) {
      return request[reqType](options, callback)
    }
    // For streaming responses
    return request[reqType](options)
  };
});