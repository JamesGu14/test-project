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

function update(id, videoList) {
  return knex('VideoList').update(videoList)
    .where({ id: parseInt(id) })
    .returning('*')
}

function delete(id) {
  return knex('VideoList').del()
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