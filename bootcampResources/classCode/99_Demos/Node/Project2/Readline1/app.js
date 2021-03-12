const readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ')
let food = readlineSync.question('What is your favorite food? ')
let drink = readlineSync.question('What is your favorite drink? ')

let result = `
    Hi ${name}, your favorite food is ${food} and your favorite drink is ${drink}.
`
console.log(result)