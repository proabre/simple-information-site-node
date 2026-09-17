const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;

    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "/contact-me.html";
      break;
    default:
      path += "/404.html";
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
