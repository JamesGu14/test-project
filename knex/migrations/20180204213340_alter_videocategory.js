
exports.up = function(knex, Promise) {
   return knex.schema.createTable('VideoCategoryRef', (table) => {
     table.increments()
     table.integer('videoId').unsigned()
     table.foreign('videoId').references('Video.id')
     table.integer('videoCategoryId').unsigned()
     table.foreign('videoCategoryId').references('VideoCategory.Id')
     table.boolean('isActive').notNullable().defaultTo(true)
   }).then(() => {
     return knex.schema.createTable('VideoList', (table) => {
       table.increments()
       table.string('listName').notNullable()
     })
   })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('VideoCategoryRef').then(() => {
    knex.schema.dropTable('VideoList')
  })
}
