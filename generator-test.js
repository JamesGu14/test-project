function* Hello() {
  yield 1
  yield 2
  yield 3
}

var hello = Hello() // hello 是一个generator
console.log(hello.next()) // a: Object {value: 1, done: false}
console.log(hello.next()) // b: Object {value: 2, done: false} 
console.log(hello.next()) // c: Object {value: undefined, done: true}
