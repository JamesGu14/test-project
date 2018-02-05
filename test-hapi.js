const Hapi = require('hapi')
const Boom = require('boom')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: '3000'
})

server.route({
  method: 'GET',
  path: '/error',
  handler: function (request, reply) {

    return reply(Boom.notFound('Items not found'))
  }
})

server.start((err) => {

  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})