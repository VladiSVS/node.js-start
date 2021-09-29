let array = require('./data')
console.log('requireString', require('./data'))
console.log('hello', array)

console.log('Hello world!')
for (i = 0; i < 5; i++) {
    console.log(i)
}

let data1 = require('./data1') //object
console.log(data1)
console.log(data1.textExported)
console.log(data1.cityExported)
console.log(data1.myKey)

let data2 = require('./data2') //object
console.log(data2)

let logIn = require('./function.js')
console.log(logIn)
logIn('superman')

let myFunction = require('./function1.js')
console.log(myFunction)
myFunction.logOut('Batman')
myFunction.register('Aquamarine')

// module export Import in Node.js
// install some Package

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));

// or cowsay.think()

const _ = require('lodash')
console.log(data1.cityExported)
console.log(_.sortBy(data1.cityExported))
console.log(_.sortBy(_.uniq([1, 2, 4, 2, 5, 2, 1, 1, 1, 4, 3])))