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
  return new Promise(function(resolve, reject) {
    if (b > 1) {
      resolve(b)
    } 
    reject('funcB failed')
  })
}

funcA(2, 1).then(b => funcB(b)).catch(err => {
  console.log(err)
})