var where = {
  $or: [
    { completedDate : { $eq : null } },
    { hiddenDate : { $eq : null } }
  ]
};

where.trialId = '12345';

console.log(require('util').inspect(where));