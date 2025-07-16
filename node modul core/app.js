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

const fs = require("fs");
const { stdin } = require("process");

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

// membuat pertanyaan di terminal
const readline = require("readline");
const { json } = require("stream/consumers");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukkan nama anda :", (nama) => {
  rl.question("masukkan nomor hp anda :", (noHP) => {
    const data = { nama, noHP };
    const files = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(files);
    contacts.push(data);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log(`terima kasih, nama anda ${nama}, noHP ${noHP}`);
    rl.close();
  });
}); 
