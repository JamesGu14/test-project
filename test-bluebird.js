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



funcA(2, 1).then(b => funcB(b)).then(funcC()).catch(err => {
  console.log(err)
})