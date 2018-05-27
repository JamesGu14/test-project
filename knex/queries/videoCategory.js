const knex = require('../connection.js')

function getAll() {
  return knex('VideoCategory').select('*')
}

function getById(id) {
  return knex('VideoCategory').select('*')
    .where({ id: parseInt(id) })
}

function add(videoCategory) {
  return knex('VideoCategory').insert(videoCategory)
    .returning('*')
}

function updateById(id, videoCategory) {
  return knex('VideoCategory').update(videoCategory)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('VideoCategory').del()
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