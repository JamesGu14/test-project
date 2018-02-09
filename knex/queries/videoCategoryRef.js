const knex = require('../connection.js')

function getAll() {
  return knex('VideoCategoryRef').select('*')
}

function getById(id) {
  return knex('VideoCategoryRef').select('*')
    .where({ id: parseInt(id) })
}

function add(videoCategoryRef) {
  return knex('VideoCategoryRef').insert(videoCategoryRef)
    .returning('*')
}

function update(id, videoCategoryRef) {
  return knex('VideoCategoryRef').update(videoCategoryRef)
    .where({ id: parseInt(id) })
    .returning('*')
}

function delete(id) {
  return knex('VideoCategoryRef').del()
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