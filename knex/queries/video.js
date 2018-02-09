const knex = require('../connection.js')

function getAll() {
  return knex('Video').select('*')
}

function getById(id) {
  return knex('Video').select('*')
    .where({ id: parseInt(id) })
}

function add(video) {
  return knex('Video').insert(video)
    .returning('*')
}

function update(id, video) {
  return knex('Video').update(video)
    .where({ id: parseInt(id) })
    .returning('*')
}

function delete(id) {
  return knex('Video').del()
    .where({ id: parseInt(id) })
    .returning('*')
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  delete,
}