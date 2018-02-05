
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Province', (table) => {
    table.increments()
    table.string('provinceName', 50).notNullable().unique()
  }).then(() => {
    return knex.schema.createTableIfNotExists('City', (table) => {
      table.increments()
      table.string('cityName', 50).notNullable().unique()
      table.integer('provinceId').unsigned()
      table.foreign('provinceId').references('Province.id')
    }).then(() => {
      return knex.schema.table('User', (table) => {
        table.integer('cityId').unsigned()
        table.foreign('cityId').references('City.id')
      })
    })
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Province').then(() => {
    return knex.schema.dropTable('City')
  })
}
