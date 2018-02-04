// function* Hello() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var hello = Hello(); // hello 是一个generator
// console.log(hello.next()); // a: Object {value: 1, done: false}
// console.log(hello.next()); // b: Object {value: 2, done: false} 
// console.log(hello.next()); 
// console.log(hello.next());

// function* gen(x){
//   var y = yield x + 2;
//   return y;
// }

// var g = gen(1);
// console.log(g.next()) // { value: 3, done: false }
// console.log(g.next(2)) // { value: 2, done: true }

var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen()
var result = g.next()

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});