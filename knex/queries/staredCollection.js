const knex = require('../connection.js')

function getAll() {
  return knex('StaredCollection').select('*')
}

function getById(id) {
  return knex('StaredCollection').select('*')
    .where({ id: parseInt(id) })
}

function add(staredCollection) {
  return knex('StaredCollection').insert(staredCollection)
    .returning('*')
}

function update(id, staredCollection) {
  return knex('StaredCollection').update(staredCollection)
    .where({ id: parseInt(id) })
    .returning('*')
}

function delete(id) {
  return knex('StaredCollection').del()
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