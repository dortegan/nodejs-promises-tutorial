'use strict'

var http = require('q-io/http');

var promise = http.read('http://localhost:1337')
.then(function (content) {
  return JSON.parse(content);
});

promise.then(console.log);
