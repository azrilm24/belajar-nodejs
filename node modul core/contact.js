const fs = require("fs");
const readline = require("readline");
const { json } = require("stream/consumers");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// cek direktori jika tidak ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// cek file jika tidak ada.
const dataPath = "./data/contacts.json";
if (!fs.existsSync()) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const data = { nama, email, noHP };
  const files = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(files);
  contacts.push(data);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(`terima kasih, nama anda ${nama}, email ${email}`);
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
