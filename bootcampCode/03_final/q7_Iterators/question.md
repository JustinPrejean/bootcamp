### Question:

What are various iterator functions available in JavaScript (e.g. forEach)?  What would be your choice of an iterator function to loop over the elements of an object?  What would be your choice of an iterator for arrays? Provide simple examples with your brief comments?

Iterators: 
Foreach
For loop
for...in
Do while
While loop

for objects:
for...in
Example:
const people = {Mark: 35, James: 50, Paul: 24}

for(const person in people){
    console.log(person + " is " + people[person])
}

for...in works well for objects because of the way you need to reference items in an object using object[key] because you can't simply provide the index of the key:value pair. It is also useful when looking for a key/value you do not know beforehand


for arrays:
for loop

Example: 

const array = ["dogs", "cats", "turtles", "pidgeons"]

for(var i = 0; i < array.length; i++){
    i < array.length - 1 ? console.log("We love " + array[i]) : console.log("Don't mess with " + array[i])
}
for loops go through each item based on what you provide in the argument making it easy to manipulate. Arrays can be found via index which works well with for loops