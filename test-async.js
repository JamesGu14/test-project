const Async = require('async');

Async.auto({
    site: function(callback) {
        console.log('in get_data');
        // async code to get some data
        callback(null, {
            LatestStndrdMlstnCd: '9600',
            StudySiteCd: '123',
            StudySiteSubjectPrgrssn: [
              { ClnclStudyId : '1234'}
            ]
        });
    },
    siteAggregate: ['site', function(results, callback) {
      
      console.log(results);
      setTimeout(function () {

        // once there is some data and the directory exists,
        // write the data to a file in the directory
        callback(null, 'filename');
      }, 3000);
    }]
}, function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results.site);
});
