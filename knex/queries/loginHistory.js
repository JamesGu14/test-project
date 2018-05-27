const knex = require('../connection.js')

function getAll() {
  return knex('LoginHistory').select('*')
}

function getById(id) {
  return knex('LoginHistory').select('*')
    .where({ id: parseInt(id) })
}

function add(loginHistory) {
  return knex('LoginHistory').insert(loginHistory)
    .returning('*')
}

function updateById(id, loginHistory) {
  return knex('LoginHistory').update(loginHistory)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('LoginHistory').del()
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