'use strict';

const request = require('request');

const A = async() => {
  console.log('Start')

  for(var i = 0; i < 2; i++) {
    try {
      console.log(await B('http://localhost:1337/'))
    } catch(exc) {
      throw Error('fail')
    }
  }
  
  console.log('complete request')
}

var B = (url) => {
  return new Promise(function(resolve, reject) {  
    request(url, function(err, res, body) {
      if (err) return reject(err)
      try {
        resolve(JSON.parse(body).status)
      } catch(exc) {
        return reject(exc)
      }
    }) 
  });  
}

A()