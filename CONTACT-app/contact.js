const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
const { resolve } = require("path");

const dataPath = "./data";
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}
const data = "./data/contacts.json";
if (!fs.existsSync(data)) {
  fs.writeFileSync(data, "[]", "utf-8");
}

const loadContact = () => {
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};
const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const contacts = loadContact();
  // const file = fs.readFileSync("./data/contacts.json", "utf-8");
  // const contacts = JSON.parse(file);

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("contact sudah terdaftar, gunakan nama lain!")
    );
    return false;
  }

  // cek email valid
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("email tidak valid!"));
      return false;
    }
  }

  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("nomor telpon tidak valid!"));
    return false;
  }
  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  console.log(`terima kasih telah mengisi!`);
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.bgGreen.bold("daftar kontak:"));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }
  console.log(chalk.blue(`${contact.nama}`));
  console.log(chalk.blue.bold(`${contact.noHP}`));
  if (contact.email) {
    console.log(chalk.blue.bold(`${contact.email}`));
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContact = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContact.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync("./data/contacts.json", JSON.stringify(newContact));
  console.log(
    chalk.green.inverse.bold(`data kontak ${nama} berhasil dihapus!`)
  );
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
