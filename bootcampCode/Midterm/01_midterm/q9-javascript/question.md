In JavaScript, how do you append a value to an array? List 4 ways you can find (you may be able to find more) (25% credit).

Provide example code showing the use of each of the methods you list. (40% credit)

How do you remove a specified member from the array? Provide small sample. (35% credit)

To append:

use .push to add an element to the end
ex:
array.push("item");

add an element using array.length (length will be 1 more than the final current index)
ex:
array[array.length] = "item";

use .splice by specificying where you want to start the splice, how many items you want to remove and then which item to add
ex:
array.splice(array.length, 0, "item",) //array.length gives the index + 1 of the current last item

concatinate the array with another array to create a new array containing the items in the first array followed by the second.

ex:
array1 = [item1, item2];
array2 = [item3];
array3 = array1.concat(array2);
array3 = [item1, item2, item3];

to remove:

create a loop to go through each item, if the item eqals the specific member then it will be removed using splice

array = [item1, item2, ...]
member = ...;
for(var i = 0; i < array.length; i++){
if(array[i] === member){
array.splice(i, 1);
break;
}
}
