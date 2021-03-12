// Faulty Solution

function isIsogram(str){
    let strObj = {}          // here we track occurrence of each alphabet

    // don't care about case, convert to array and loop over it
    return str.toLowerCase().split("").forEach(
        function(letter) {
            if(strObj[letter]){  // testing strObj property for each unique letter
                return false     // if a repeat letter found, then not an isogram
            }
            strObj[letter] = true // if not found, then the property is set to true
        }
    )
    return true; 
}

var test = "Hello"

console.log(`test: ${isIsogram(test)}`)


// Fixed Solution

// Faulty Solution

function isIsogram(str){
    let strObj = {}          // here we track occurrence of each alphabet
    var answer = true; // created variable to hold boolean of whether is isogram or not 

    // don't care about case, convert to array and loop over it
    str.toLowerCase().split("").forEach( // removed return from for each because it was not allowing the other returns to occur
        function(letter) {
            if(strObj[letter]){  // testing strObj property for each letter
                answer = false;
            }
            strObj[letter] = true // if not found, the property is set to true
        }
    )
    return answer == false ? false : true; //if changed to false, stays false. If true, stays true. 
}

var test = "Hello"

console.log(`test: ${isIsogram(test)}`)

