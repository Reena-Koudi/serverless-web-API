var ApiBuilder = require('claudia-api-builder'),
superb = require('superb'),
  api = new ApiBuilder();

module.exports = api;

api.get('/hello', function (request) {
  return request.queryString.name + ' is ' + superb();
});