const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = req.url;
    const renderHTML = (path, res) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error : file not found!");
        } else {
          res.write(data);
        }
        res.end();
      });
    };
    if (url === "/about") {
      renderHTML("./about.html", res);
    } else if (res === "/contact") {
      renderHTML("./contact.html", res);
    } else {
      renderHTML("./index.html", res);
    }
  })
  .listen(3000, () => console.log("listening on port 3000..."));
