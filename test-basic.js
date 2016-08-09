/**
 * 闭包
 */
for (var i = 0; i < 10; i++) {
  (function (arg) {
    setTimeout(function () {
      console.log('i = ', arg)
    }, 1000)
  })(i)
}

// (function (a, b) {
//   console.log(a+ b)
// })(1,2)

// console.log('Completed')


// 这不是闭包
// function foo(x) {
//   var tmp = 3
//   function bar(y) {
//     console.log(x + y + (++tmp))
//   }
//   bar(10)
// }
// foo(2)



// function foo(x) {
//   var tmp = 3
//   return function (y) {
//     console.log(x + y + (++tmp))
//   }
// }
// var bar = foo(2) // bar 现在是一个闭包
// console.log(typeof bar)
// bar(10)
// bar(11)
// bar(12)


// function foo(x) {
//   var tmp = 3
//   return function (y) {
//     console.log(x + y + tmp)
//     x.memb = x.memb ? x.memb + 1 : 1
//     console.log(x.memb)
//   }
// }
// var age = new Number(2)
// var bar = foo(age) // bar 现在是一个引用了age的闭包
// bar(10)
// bar(10)
