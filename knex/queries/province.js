const knex = require('../connection.js')

function getAll() {
  return knex('Province').select('*')
}

function getById(id) {
  return knex('Province').select('*')
    .where({ id: parseInt(id) })
}

function add(province) {
  return knex('Province').insert(province)
    .returning('*')
}

function updateById(id, province) {
  return knex('Province').update(province)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('Province').del()
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