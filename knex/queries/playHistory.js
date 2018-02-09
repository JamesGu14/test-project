const knex = require('../connection.js')

function getAll() {
  return knex('PlayHistory').select('*')
}

function getById(id) {
  return knex('PlayHistory').select('*')
    .where({ id: parseInt(id) })
}

function add(playHistory) {
  return knex('PlayHistory').insert(playHistory)
    .returning('*')
}

function updateById(id, playHistory) {
  return knex('PlayHistory').update(playHistory)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('PlayHistory').del()
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