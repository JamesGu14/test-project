'use strict'

const jwt = require('jwt-simple')
const secret = 'test'
let payload = {}
try {
  payload = jwt.decode('123', secret, true, 'HS512') 
} catch (err) {
  console.log(err.message)
}

