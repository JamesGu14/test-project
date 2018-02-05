// var todos = ['a', 'b2', 'c', 'd1', 'e']

// var completedCount = todos.reduce((count, todo) => {
//   todo.length == 1 ? count + 1 : count }
// )

// console.log(completedCount)

function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies
    })
    .catch((error) => {
      console.error(error)
    })
}

console.log(getMoviesFromApiAsync())
