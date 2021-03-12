Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

Hint: Convert the string to an array and then loop over the array.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return 7.

let string1 = "This is a string" 
let string2 = "There was string"

<!-- convert strings to arrays of letters -->
let array1 = string1.split("") 
let array2 = string2.split("")

<!-- will be count of differences -->
let count = 0;

<!-- iterate through string1, if the char at position i in array1 is different than char in position i in array2 -> count plus 1 -->
for(var i = 0; i < string1.length; i++){
  string1[i] == string2[i] ? count = count : count++; 
}