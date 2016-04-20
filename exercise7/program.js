'use strict'

function onFulfilled(fulfill) {
    console.log(fulfill);
}

var firstPromise = first();
var secondPromise = firstPromise.then(function (firstValue) {
  return second(firstValue);
});

secondPromise.then(onFulfilled);
