const knex = require('../connection.js')

function getAll() {
  return knex('VideoListSuitable').select('*')
}

function getById(id) {
  return knex('VideoListSuitable').select('*')
    .where({ id: parseInt(id) })
}

function add(videoListSuitable) {
  return knex('VideoListSuitable').insert(videoListSuitable)
    .returning('*')
}

function updateById(id, videoListSuitable) {
  return knex('VideoListSuitable').update(videoListSuitable)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('VideoListSuitable').del()
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