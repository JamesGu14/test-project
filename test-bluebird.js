'use strict'

const fs = require('fs')
const Promise = require('bluebird')

function funcA(a, b) {
  return new Promise(function(resolve, reject) {
    if (a > 1) {
      resolve(b)
    } else {
      reject('funcA failed')
    }
  })
}

function funcB(b) {
  return new Promise((resolve, reject) => {
    if (b != 100) {
      setTimeout(function() {
        console.log('funcB execute')
        resolve()
      }, 500)
    }
    else {
      reject()
    }
  })
}

function funcC() {
  console.log('funcC execute')
}

let A = () => {
  return new Promise(function(resolve, reject) {
    console.log('A is called')
    resolve(true)
  })
}

let B = (status) => {

  return new Promise((resolve, reject) => {
    if (status) {
      setTimeout(function() {
        console.log('B is called')
        resolve()
      }, 500)
    }
    else {
      reject()
    }
  })
}

let C = () => {
  return new Promise((resolve, reject) => {
    
    console.log('C is true')
    resolve()
  })
}

A().then(status => B(status)).then(() => C())

// Promise.reduce([A, B, C], function(total, item) {
//   item()
// }, 0).then(function(total) {
//   //Total is 30
// });
