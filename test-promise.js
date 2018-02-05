function funcA () { 
  console.log(1) 
}

function funcB (a, b) {
  funcA()
  return a + b
}

var p1 = new Promise(funcB)
p1

