Consider the following code.  What would be console logged?  Messed up?  Why? (20%)

What would you change to address this issue (where the Apple type is, mis-represented in the last line below)? (80%)

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


Hint: this question refers to copying of objects.

ANSWER:

The console would say "Apple type is Clementine.
The reason is that when orange was declared, it was assigned apple which means they'll have the same reference address. If one is changed, so is the other. 

Change the way that orange is declared to: 

  var orange = JSON.parse(JSON.stringify(apple));

Once the stringified object is parsed, it will create a new object with it's own memory address no longer causing apple to be changed when orange does. 
