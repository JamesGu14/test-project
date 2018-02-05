'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('User', (table) => {
    table.increments()
    table.string('mobile', 20).unique().notNullable().comment('as primary login username')
    table.string('email', 100).unique().notNullable().comment('as secondary login username')
    table.string('password').notNullable()
    table.string('salt', 100)
    table.string('fullname')
    table.boolean('isActive').notNullable().defaultTo(true)
    table.dateTime('createdAt').notNullable()
    table.dateTime('updatedAt').notNullable()
    table.dateTime('deletedAt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('User')
};
