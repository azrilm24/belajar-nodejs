const fs = require("fs");
const { resolve } = require("path");
const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

const dataPath = "./data";
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}
const data = "./data/contacts.json";
if (!fs.existsSync(data)) {
  fs.writeFileSync(data, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };

  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  console.log(`terima kasih telah mengisi!`);
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
