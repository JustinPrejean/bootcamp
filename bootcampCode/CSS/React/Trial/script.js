// Faulty Solution

function isIsogram(str){
    let strObj = {}          // here we track occurrence of each alphabet
    var answer = true;
    // don't care about case, convert to array and loop over it
    str.toLowerCase().split("").forEach(
        function(letter) {
            if(strObj[letter]){  // testing strObj property for each letter
                answer = false;
            }
            strObj[letter] = true // if not found, the property is set to true
        }
    )
    return answer == false ? false : true;
}

var test = "Hello"

console.log(`test: ${isIsogram(test)}`)
