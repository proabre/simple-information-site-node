const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      statusCode = 200;
      break;
    case "/contact-me":
      path += "/contact-me.html";
      statusCode = 200;
      break;
    default:
      path += "/404.html";
      statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("Could not read the file");
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(8080, "localhost", () => {
  console.log("listening for requests on http://localhost:8080");
});

//status code
// 200 = it worked
// 300 = go somewhere else
// 400 = the request is a problem
// 500 = the server has a problem
