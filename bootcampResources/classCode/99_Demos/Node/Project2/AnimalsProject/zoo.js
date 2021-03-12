const Log = require('log.pets');
const animals = require('animals');

console.log(animals());

console.log(Log.lion())

let results = Log.zoo(animals(), animals(), animals())

console.log(results)

console.log(`# of animals in generator: ${animals.words.length}`)

let results2 = animals.words.filter(data => {
    return data.substring(0,1) == "G"
})

console.log("# of animals starting with G: ", results2.length != 0 ? results2.length : "No matches found")

let results3 = animals.words.filter(data => {
    return data.substring(0,1).toUpperCase() == "G"
})

console.log("# of animals starting with G: ", results3.length != 0 ? results3.length : "No matches found")

