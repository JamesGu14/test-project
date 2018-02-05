const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Welcome to the questionare')
console.log('Q1. What is your favorite color?')
rl.on('line', (input) => {
  rl.emit('pause')
  console.log('Thanks, your answer is: ' + input)

  console.log('Q2. What is your favorite movie?')
  rl.on('line', (input) => {
    rl.emit('pause')
    console.log('Thanks, your answer is: ' + input)
  })
})

rl.on('pause', () => {
  console.log('System is process...')
})