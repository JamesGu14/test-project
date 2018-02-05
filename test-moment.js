'use strict'

const moment = require('moment')

let expiry = moment().add(2, 'h')
console.log(expiry.format('YYYY-MM-DD HH:mm:ss'))

let now = moment()

if(now < expiry) console.log(true)
else console.log(false)
