const knex = require('../connection.js')

function getAll() {
  return knex('VideoTagRef').select('*')
}

function getById(id) {
  return knex('VideoTagRef').select('*')
    .where({ id: parseInt(id) })
}

function add(videoTagRef) {
  return knex('VideoTagRef').insert(videoTagRef)
    .returning('*')
}

function updateById(id, videoTagRef) {
  return knex('VideoTagRef').update(videoTagRef)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('VideoTagRef').del()
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