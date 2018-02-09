const knex = require('../connection.js')

function getAll() {
  return knex('City').select('*')
}

function getById(id) {
  return knex('City').select('*')
    .where({ id: parseInt(id) })
}

function add(city) {
  return knex('City').insert(city)
    .returning('*')
}

function updateById(id, city) {
  return knex('City').update(city)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('City').del()
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