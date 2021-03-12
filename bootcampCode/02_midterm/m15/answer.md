2

functions can be defined in JS before or after they are called. In the global
scope the test functions are declared before the code block is run and since the
test returning 2 is later, the console.log will use that version of test
<!-- Correct -->