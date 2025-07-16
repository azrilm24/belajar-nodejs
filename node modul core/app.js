const yargs = require("yargs");
const contact = require("./contact");

yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email Lengkap",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "nomor Handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.simpanContact(argv.nama, argv.email, argv.noHP);
  },
});
yargs.parse();

// const fs = require("fs");
// const { json } = require("stream/consumers");

// // writefile
// // synchronous
// // fs.writeFileSync("text.txt", "tulis pertama helo world!");

// // try {
// //   fs.writeFileSync("data/baru.tt", "ini yang kedua dirubah");
// // } catch (e) {
// //   console.log(e);
// // }

// // secara asynchronous
// // fs.writeFile("data/scrAsync.txt", "writeFile secara asynchronous!", (err) => {
// //   console.log(err);
// // });

// // readFile (synch)
// // const data = fs.readFileSync("data/baru.txt", "utf-8");
// // console.log(data);
// // console.log(data.toString());

// // readFile (async)
// // fs.readFile("datas/scrAsync.txt", "utf-8", (err, data) => {
// //   if (err) throw err;
// //   console.log(data);
// // });

// // readLine
// // const readline = require("readline");
// // const rl = readline.Interface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });
// // rl.question("masukkan nama anda:", (nama) => {
// //   console.log(`halo ${nama} selamat datang!`);
// //   rl.close();
// // });

// const readline = require("readline");
// const rl = readline.Interface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("masukkan nama anda :", (nama) => {
//   rl.question("masukkan no HP anda :", (noHP) => {
//     const contact = { nama, noHP };
//     const file = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(file);
//     contacts.push(contact);

//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
//     console.log(`terima kasih telah mengisi!`);
//     rl.close();
//   });
// });

// const fs = require("fs");
const { stdin } = require("process");
const { type } = require("os");
const { simpanContact } = require("./contact");

// menuliskan string ke file scr synch
// try {
//   fs.writeFileSync("data/text.txt", "tulis yang kedua");
// } catch (e) {
//   console.log(e);
// }

// secara async
// fs.writeFile("data/baru.txt", "tulis scr async", (err) => {
//   console.log(err);
// });

// membaca file scr sync
// const data = fs.readFileSync("data/baru.txt", "utf-8");
// console.log(data);

// secara async
// fs.readFile("datas/scrAsync.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });
// const contact = require("./contact");

// const main = async () => {
//   const nama = await contact.tulisPertanyaan("masukkan nama anda : ");
//   const email = await contact.tulisPertanyaan("masukkan email anda :");
//   const noHP = await contact.tulisPertanyaan("masukkan no HP anda :");
//   contact.simpanContact(nama, email, noHP);
// };

// main();

// rl.question("masukkan nama anda :", (nama) => {
//   rl.question("masukkan nomor hp anda :", (noHP) => {
//     const data = { nama, noHP };
//     const files = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(files);
//     contacts.push(data);
//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
//     console.log(`terima kasih, nama anda ${nama}, noHP ${noHP}`);
//     rl.close();
//   });
// });
