
exports.up = function(knex, Promise) {
  return knex.schema.createTable('VideoTagRef', (table) => {
    table.increments()
    table.integer('videoId').unsigned()
    table.foreign('videoId').references('Video.id')
    table.integer('videoTagId').unsigned()
    table.foreign('videoTagId').references('VideoTag.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('VideoTagRef')
}
