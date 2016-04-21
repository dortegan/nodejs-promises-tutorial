'use strict'

var input = process.argv[2];

function parsePromised(input) {
  var promise = new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(input));
    } catch (e) {
      reject(e);
    }
  });
  return promise;
}

parsePromised(input).then(null, console.log);
