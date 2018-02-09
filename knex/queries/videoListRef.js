const knex = require('../connection.js')

function getAll() {
  return knex('VideoListRef').select('*')
}

function getById(id) {
  return knex('VideoListRef').select('*')
    .where({ id: parseInt(id) })
}

function add(videoListRef) {
  return knex('VideoListRef').insert(videoListRef)
    .returning('*')
}

function update(id, videoListRef) {
  return knex('VideoListRef').update(videoListRef)
    .where({ id: parseInt(id) })
    .returning('*')
}

function delete(id) {
  return knex('VideoListRef').del()
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