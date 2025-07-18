const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.use(expressLayouts);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "azril",
      email: "azril@gmail.com",
    },
    {
      nama: "adit",
      email: "adit@gmail.com",
    },
    {
      nama: "yuda",
      email: "yuda@gmail.com",
    },
  ];

  res.render("index", {
    nama: "ajril",
    layout: "layouts/main-layouts",
    title: "halaman home",
    mahasiswa,
  });
});
app.get("/index", (req, res) => {
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layouts",
    title: "Halaman About",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layouts",
    title: "Halaman Contact",
  });
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
