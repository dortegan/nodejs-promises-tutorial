'use strict'

function all(promise1, promise2) {
  var promise = new Promise(function (fulfill, reject) {
    var counter = 0;
    var values = [];

    promise1.then(function (value) {
      counter++;
      values[0] = value;
      if (counter == 2) {
        fulfill(values);
      }
    });
    
    promise2.then(function (value) {
      counter++;
      values[1] = value;
      if (counter == 2) {
        fulfill(values);
      }
    });
  });
  return promise;
}

all(getPromise1(), getPromise2()).then(console.log);
