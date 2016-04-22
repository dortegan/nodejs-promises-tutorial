'use strict'

var http = require('q-io/http');

var userIdPromise = http.read('http://localhost:7000')
  .then(function (userId) {
    return userId;
  });

userIdPromise.then(function (userId) {
  http.read('http://localhost:7001/' + userId).then(
    function(user) {
      console.log(JSON.parse(user));
    }
  );
});

