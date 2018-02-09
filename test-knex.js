const query = require('./knex/queries/index')

query.city.getAll().then(cities => {
  cities.forEach((city, index) => {
    console.log(`${index} ${city.cityName}`)
  })
})