const marvel = require('marvel-characters')

console.log(marvel())

let charLength = marvel.characters.length

console.log('# of characters in the db: ', charLength)

let results1 = marvel.characters.filter((data)=>{
    return data.substring(0,3) == 'Man'
})

console.log(results1.length != 0 ? results1 : "No matches found")


let results2 = marvel.characters.filter((data)=> {
    return data == "Iron Man";
})

console.log(results2.length != 0 ? results2 : "No matches found")

let results3 = marvel.characters.filter((data)=> {
    return data == "Batman";
})

console.log(results3.length != 0 ? results3 : "No matches found")