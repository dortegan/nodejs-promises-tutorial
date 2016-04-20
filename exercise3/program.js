'use strict'

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function() {
    reject(new Error('REJECTED!'));
  }, 300);
});

promise.then(console.log, function onReject(error) {
  console.log(error.message);
});
