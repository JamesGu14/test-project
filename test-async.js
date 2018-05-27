const Async = require('async')
const fs = require('fs')
const uuidv1 = require('uuid/v1')
// Async.auto({
//   site: function(callback) {
//     // async code to get some data
//     return callback(null, {
//       LatestStndrdMlstnCd: '9600',
//       StudySiteCd: '123'
//     })
//   },
//   siteAggregate: ['site', function(results, callback) {

//     console.log(typeof results)
//     return callback(null, 'filename')
//   }]
//   }, function(err, results) {
// })
console.log()

function A(callback) {
  // do some stuff ...
  fs.readFile('./test-bluebird.js', function () {
    console.log('A is called')
    callback(null, 'one')
  })
}
function B(callback) {
  // do some more stuff ...
  console.log('B is called')
  callback(null, 'two')
}


// Async.series([
//   A,
//   B
// ]);