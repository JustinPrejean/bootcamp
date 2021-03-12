Team 1:

Create a function that 
1. creates a 2-D array in JS (find out how to accomplish that).  
2. In that array, randomly place n chess queens (n is a provided argument). The presence of a queen is denoted by an object like this ... {order: 1, name: "Alice"}.  
3. Return a reference to the array.

Team 2:

Take the array given by team one and
1. find how large it is.  Assume it is a square array
2. determine if the queens are safe from each other.
3. return true or false based on their group safety.


Everyone at Home before next class:

1. Write a test that tests the board creation.  
2. Add several options:

   Board Size      # of Queens
   -                -             // no inputs
   "string"         -             // wrong inputs
   -                "string"      // wrong inputs
   2                1
   2                2
   2                3             // exception
   3                2
   3                3
   6                2
   6                4
   6                6
   6                8
   10               5
   10               11
   100              50
   100              99
   1000             1
   1000             999

3. Write another set of tests that check the queen is safe function   
