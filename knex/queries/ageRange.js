const knex = require('../connection.js')

function getAll() {
  return knex('AgeRange').select('*')
}

function getById(id) {
  return knex('AgeRange').select('*')
    .where({ id: parseInt(id) })
}

function add(ageRange) {
  return knex('AgeRange').insert(ageRange)
    .returning('*')
}

function updateById(id, ageRange) {
  return knex('AgeRange').update(ageRange)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('AgeRange').del()
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