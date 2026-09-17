// Import the Express framework
const express = require("express");

//express app
// Create an Express application
const app = express();

// Define the port where our server will run
const port = 3000;

//listen for reuest
// Start the server and listen for requests on port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle GET requests to the home page "/"
app.get("/", (req, res) => {
  // Send a response back to the browser
  // res.send("<p>Express home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // Send a response back to the browser
  //res.send("<p>Express home page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // Send a response back to the browser
  //res.send("<p>Express home page</p>");
  res.sendFile("./views/contact-me.html", { root: __dirname });
});
//Express.js is a web framework for Node.js. It helps you build web servers and APIs more easily than using Node's built-in http module directly.
