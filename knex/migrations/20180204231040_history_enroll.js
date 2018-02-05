
exports.up = function(knex, Promise) {
  return knex.schema.createTable('PlayHistory', (table) => {
    table.increments()
    table.integer('userId').unsigned()
    table.foreign('userId').references('User.id')
    table.integer('videoListId').unsigned()
    table.foreign('videoListId').references('VideoList.id')
    table.integer('videoId').unsigned()
    table.foreign('videoId').references('Video.id')
    table.dateTime('startAt').notNullable()
  }).then(() => {
    return knex.schema.createTable('StaredCollection', (table) => {
      table.increments()
      table.integer('videoId').unsigned()
      table.foreign('videoId').references('Video.id')
      table.integer('videoListId').unsigned()
      table.foreign('videoListId').references('VideoList.id')
      table.boolean('isActive').notNullable().defaultTo(true)
      table.dateTime('createAt').notNullable()
      table.dateTime('deactivateAt')
    }).then(() => {
      return knex.schema.createTable('EnrollList', (table) => {
        table.increments()
        table.integer('videoListId').unsigned()
        table.foreign('videoListId').references('VideoList.id')
        table.boolean('isActive').notNullable().defaultTo(true)
        table.dateTime('createdAt').notNullable()
        table.dateTime('deactivateAt')
      })
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('PlayHistory').then(() => {
    return knex.schema.dropTable('StaredCollection').then(() => {
      return knex.schema.dropTable('EnrollList')
    })
  })
};
