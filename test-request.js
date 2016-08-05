'use strict'

const Request = require('request')

let url = 'http://localhost:3000/error'

Request.get(url, function (err, result) {

  if (err) return console.log('Error: ' + err)
  
  console.log(result.body)
  // console.log(result)
})