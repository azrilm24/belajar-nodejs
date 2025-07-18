// const fs = require("fs");
// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     const url = req.url;
//     const renderHTML = (path, res) => {
//       fs.readFile(path, (err, data) => {
//         if (err) {
//           res.writeHead(404);
//           res.write("Error : file not found!");
//         } else {
//           res.write(data);
//         }
//         res.end();
//       });
//     };
//     if (url === "/about") {
//       renderHTML("./about.html", res);
//     } else if (res === "/contact") {
//       renderHTML("./contact.html", res);
//     } else {
//       renderHTML("./index.html", res);
//     }
//   })
//   .listen(3000, () => console.log("listening on port 3000..."));

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  // res.json({
  //   nama: "azril miqraji",
  //   nim: "210603003",
  // });

  res.sendFile("./index.html", { root: __dirname });

  // res.send("hello world!");
});

app.get("/about", (req, res) => {
  // res.send("hello, ini adalah halaman ABOUT!");
  res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  // res.send("hello, ini adalah halaman CONTACT!");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(`product ID: ${req.params.id} <br> kategori: ${req.query.kategori}`);
});

// menangani halaman yang tidak ada.
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
  console.log("listening port 3000...");
});
