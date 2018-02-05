
exports.up = function(knex, Promise) {
  return knex.schema.createTable('VideoListRef', (table) => {
    table.increments()
    table.integer('order').notNullable().defaultTo(0)
    table.integer('videoId').unsigned()
    table.foreign('videoId').references('Video.id')
    table.integer('videoListId').unsigned()
    table.foreign('videoListId').references('VideoList.id')
  }).then(() => {
    return knex.schema.createTable('AgeRange', (table) => {
      table.increments()
      table.string('AgeRange', 50).notNullable()
    }).then(() => {
      return knex.schema.createTable('VideoListSuitable', (table) => {
        table.increments()
        table.integer('listId').unsigned()
        table.foreign('listId').references('VideoList.id')
        table.integer('ageRangeId').unsigned()
        table.foreign('ageRangeId').references('AgeRange.id')
      })
    })
  })
};

exports.down = function(knex, Promise) {
  
};
