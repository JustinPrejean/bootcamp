// Foundation
let express = require("express");
let app = express();

// Route Handling
// root route
app.get("/", (req, res) => {
  // do something
  // request and response are positional arguments, knows it's function
  res.send("I made it Justin");
  // go to localhost:3000 on browser
});

// Listener
app.listen(3000, () => {
  // let user know that the server is running
  console.log("port 3000 has started...");
});
