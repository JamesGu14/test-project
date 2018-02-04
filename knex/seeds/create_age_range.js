
exports.seed = function(knex, Promise) {

  return knex('AgeRange').del()
    .then(() => {
      return knex('AgeRange').insert([
        { AgeRange: '0 - 6个月' },
        { AgeRange: '7 - 12个月' },
        { AgeRange: '13 - 18个月' },
        { AgeRange: '19 - 24个月' },
        { AgeRange: '2 - 3岁' },
        { AgeRange: '3 - 4岁' },
        { AgeRange: '4 - 5岁' },
        { AgeRange: '5 - 6岁' }
      ])
    })
};
