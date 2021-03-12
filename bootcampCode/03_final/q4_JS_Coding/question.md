## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
    


Answer A: 
The code puts the elements in the array in ascending numerical order. 
To reverse: 
points.reverse();

Answer B:
const pi is used before it is defined in the function.
Move const pi above the boundary variable 
(function myFn(radius){
        const pi = 3.1415926;
    var boundary = Math.pow(radius, 2) * pi
    if(boundary) console.log('boundary is ', boundary);
}(20)) 

It would not help. When using var, the declaration of the variable is hoisted to the top of function scope but the definition is not. When changing to var without changing the location, it will return undefined. 