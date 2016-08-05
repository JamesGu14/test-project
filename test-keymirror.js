var keyMirror = require('keyMirror')
var COLORS = keyMirror({blue: 1, red: 2})
var myColor = COLORS.blue
var isColorValid = !!COLORS[myColor]

console.log(myColor)