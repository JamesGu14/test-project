function func (id, auth, cb) {

  return cb(null, {
    LatestStndrdMlstnCd: '9600',
    StudySiteCd: '123',
    StudySiteSubjectPrgrssn: [
      { ClnclStudyId : '1234'}
    ]
  });
};

func(1, 1, function (err, result) {
  console.log('====' + require('util').inspect(result));
});
