const knex = require('../connection.js')

function getAll() {
  return knex('VideoList').select('*')
}

function getById(id) {
  return knex('VideoList').select('*')
    .where({ id: parseInt(id) })
}

function add(videoList) {
  return knex('VideoList').insert(videoList)
    .returning('*')
}

function updateById(id, videoList) {
  return knex('VideoList').update(videoList)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('VideoList').del()
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