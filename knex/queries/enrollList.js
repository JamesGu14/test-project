const knex = require('../connection.js')

function getAll() {
  return knex('EnrollList').select('*')
}

function getById(id) {
  return knex('EnrollList').select('*')
    .where({ id: parseInt(id) })
}

function add(enrollList) {
  return knex('EnrollList').insert(enrollList)
    .returning('*')
}

function update(id, enrollList) {
  return knex('EnrollList').update(enrollList)
    .where({ id: parseInt(id) })
    .returning('*')
}

function delete(id) {
  return knex('EnrollList').del()
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