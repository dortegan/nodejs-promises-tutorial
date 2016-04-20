'use strict'

var promise = Promise.resolve('I FIRED');
var promise = Promise.reject(new Error('I DID NOT FIRE'));

promise.catch(function (err) {
  console.error(err.message);
})
