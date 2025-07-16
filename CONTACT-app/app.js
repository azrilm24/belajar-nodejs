const yargs = require("yargs");
const contact = require("./contact");
yargs
  .command({
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
  })
  .demandCommand();

// menampilkan daftar kontak
yargs.command({
  command: "list",
  describe: "menampilkan isi kontak",
  handler() {
    contact.detailContact(argv.nama);
  },
});

// menapilkan detail kontak
yargs.command({
  command: "details",
  describe: "menampilkan detail berdasarkan nama",
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.detailContact(argv.nama);
  },
});

// menghapus kontak
yargs.command({
  command: "delete",
  describe: "menghapus kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.deleteContact(argv.nama);
  },
});
yargs.parse();
