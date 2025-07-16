const yargs = require("yargs");
const contact = require("./contact");
yargs.command({
  command: "add",
  describe: "menambahkan kontak baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email aktif",
      demandOption: true,
      type: "string",
    },
    noHP: {
      describe: "nomor telpon",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.simpanContact(argv.nama, argv.email, argv.noHP);
  },
});
yargs.parse();

// const contact = require("./contact");
// const main = async () => {
//   const nama = await contact.tulisPertanyaan("masukkan nama anda:");
//   const email = await contact.tulisPertanyaan("masukkan email anda:");
//   const noHP = await contact.tulisPertanyaan("masukkan no HP anda:");
//   contact.simpanContact(nama, email, noHP);
// };
// main();
