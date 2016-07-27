'use strict';

const Async = require('async');

var arr = [
  {
    value: 'a'
  }, 
  {
    value: 'b'
  },
  {
    value: 'c'
  },
  {
    value: 'd'
  },
  {
    value: 'e'
  }
];

Async.each(arr, function (item, callback) {
  
  setTimeout(function () {
    if (item.value != 'error') {
      
      var newItem = {
        hello: 'hello',
        world: 'world'
      }
      
      item = newItem;
      
      callback();  
    } else {
      callback(new Error('Error occurred'));
    }
  }, 1000);
  
}, function (err) {
  
  if (err) console.log('Errro occurred');
  
  else {
    console.log(require('util').inspect(arr));
    console.log('finished');
  }
});