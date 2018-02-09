const knex = require('../connection.js')

function getAll() {
  return knex('User').select('*')
}

function getById(id) {
  return knex('User').select('*')
    .where({ id: parseInt(id) })
}

function add(user) {
  return knex('User').insert(user)
    .returning('*')
}

function updateById(id, user) {
  return knex('User').update(user)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('User').del()
    .where({ id: parseInt(id) })
    .returning('*')
}

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
}