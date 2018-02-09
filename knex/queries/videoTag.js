const knex = require('../connection.js')

function getAll() {
  return knex('VideoTag').select('*')
}

function getById(id) {
  return knex('VideoTag').select('*')
    .where({ id: parseInt(id) })
}

function add(videoTag) {
  return knex('VideoTag').insert(videoTag)
    .returning('*')
}

function updateById(id, videoTag) {
  return knex('VideoTag').update(videoTag)
    .where({ id: parseInt(id) })
    .returning('*')
}

function deleteById(id) {
  return knex('VideoTag').del()
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