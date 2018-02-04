
exports.up = function(knex, Promise) {
  return knex.schema.table('Children', (table) => {
    table.integer('userId').unsigned()
    table.foreign('userId').references('User.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('Children', function (table) {
    table.dropColumn('userId')
  })
}
