'use strict';

console.log("first");
setImmediate(function(){
    console.log("second");
}, 2000);
console.log("third");