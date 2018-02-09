const Async = require('async')

Async.auto({
  site: function(callback) {
    // async code to get some data
    return callback(null, {
      LatestStndrdMlstnCd: '9600',
      StudySiteCd: '123'
    })
  },
  siteAggregate: ['site', function(results, callback) {
    
    console.log(typeof results)
    return callback(null, 'filename')
  }]
  }, function(err, results) {
})
