
exports.up = function(knex, Promise) {
  return knex.schema.createTable('VideoCategory', (table) => {
    table.increments()
    table.string('categoryName', 50).notNullable()
    table.boolean('isActive').notNullable().defaultTo(true)
    table.dateTime('createdAt').notNullable()
    table.dateTime('updatedAt').notNullable()
    table.dateTime('deletedAt')
  }).then(() => {
    return knex.schema.createTable('Children', (table) => {
      table.increments()
      table.string('gender', 1).comment('gender of children, m or f')
      table.dateTime('dob').comment('children date of birth')
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('VideoCategory')
};
