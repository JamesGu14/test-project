const knex = require('../connection.js')

function getAll() {
  return knex('Children').select('*')
}

function getById(id) {
  return knex('Children').select('*')
    .where({ id: parseInt(id) })
}

function add(children) {
  return knex('Children').insert(children)
    .returning('*')
}

function update(id, children) {
  return knex('Children').update(children)
    .where({ id: parseInt(id) })
    .returning('*')
}

function delete(id) {
  return knex('Children').del()
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