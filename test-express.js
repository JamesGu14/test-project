'use strict' 
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Boom = require('boom')

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

var data = [
  {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
  {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
]

app.get('/error', function (req, res) {
  res.send(Boom.notFound('Items not found'))
})

app.get('/api/comments', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  
  res.json(data)
})

app.post('/api/comments', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  
  var newData = {id: data[data.length - 1].id + 1, author: req.body.author, text: req.body.text}
  data.push(newData)
  res.json({status: 'success'})
})

app.get('/api/react-data', function (req, res) {

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  
  let data = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ]
  res.json(data)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
