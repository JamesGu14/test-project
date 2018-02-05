'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('Video', (table) => {
    table.increments()
    table.string('videoName').notNullable()
    table.integer('videoLength').comment('Count as seconds')
    table.string('url').notNullable()
    table.boolean('isActive').notNullable().defaultTo(true)
    table.string('uploadedAt').notNullable()
    table.string('deletedAt').notNullable()
  }).then(() => {
    return knex.schema.createTable('VideoTag', (table) => {
      table.increments()
      table.string('TagName')
    })
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Video').then(() => {
    knex.schema.dropTable('VideoTag')
  })
};
