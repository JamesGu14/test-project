
exports.up = function(knex, Promise) {
  return knex.schema.createTable('LoginHistory', (table) => {
    table.increments()
    table.integer('userId').unsigned()
    table.foreign('userId').references('User.id')
    table.string('ip', 50)
    table.dateTime('loginTime').notNullable()
    table.string('device')
    table.string('city', 50)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('LoginHistory')
}
