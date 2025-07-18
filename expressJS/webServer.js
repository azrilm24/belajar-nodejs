const http = require("http");
const fs = require("fs");
const { render } = require("ejs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found!");
    } else {
      res.write(data);
    }
    res.end();
  });
};
const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });

  const url = req.url;
  switch (url) {
    case "/about":
      renderHTML("./about.html", res);
      break;
    case "/contact":
      renderHTML("./about.html", res);
      break;

    case "/":
    case "/index":
      renderHTML("./index.html", res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 - Page Not Found</h1>");
      res.end();
  }
  // if (url === "/about") {
  //   renderHTML("./about.html", res);
  // } else if (url === "/contact") {
  //   renderHTML("./contact.html", res);
  // } else if (url === "/index" || url === "/") {
  //   renderHTML("./index.html", res);
  // } else {
  //   // Ini bagian untuk route yang tidak dikenali
  //   res.writeHead(404, { "Content-Type": "text/html" });
  //   res.write("<h1>404 - Page Not Found</h1>");
  //   res.end();
  // }
});
server.listen(3000, () => {
  console.log("Listening on port 3000...");
});
