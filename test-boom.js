'use strict'

const Boom = require('Boom')

let o = Boom.badRequest('invalid query')

console.log(typeof o)
