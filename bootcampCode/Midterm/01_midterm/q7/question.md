### I'd like to empty the array below. Please provide any 2 methods with examples and explain in brief how to empty it.

var myArray = [1, 2, 3, 4, 5] // it may have any number of elements

(
Hints:
Method 1: overwrite the array with empty array (shown below, don't use this as your answer)
Method 2: by the length property method
Method 3: using the splice Array method
Method 4: by popping each member of the array in a loop.
Method 5: anything you come up with
)

### Sample answer:

    myArray = []    // will replace the original myArray with an empty array

### Your answers:

myArray.length = 0; // changes length of array from 5 to 0 causing all items to be removed.
myArray = myArrray.splice(0,0) // sets the "start" of the array to index 0 then deletes all items starting at index 0
