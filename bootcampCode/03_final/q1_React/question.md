### Question:

Where in a react component would you put a function that you only want to invoke
when said component mounts?

Include class and functional component methods of doing this. If you don't
recall, research it and provide working examples.

Answer:

For functional components, functions you want to invoke would be inside the
function, before the return.

For class components they would be inside the class, before the render and
return.

Ex:

function App() {

    yourfunction()

    return {

    }

}

class App extends Component { yourfunction() render{ return () } }
