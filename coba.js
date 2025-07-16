function cetakNama(nama) {
  console.log(`nama saya ${nama} `);
}
const PI = 3.55;

const mhs = {
  nama: "anom",
  nim: 210502020,
  email: "anom@gmail.com",
  dataLengkap: function () {
    return `${this.nama}, ${this.nim}, ${this.email}`;
  },
};

class Orang {
  constructor(nama, gender) {
    this.nama = nama;
    this.gender = gender;
  }
  tampilAlamat() {
    console.log(`alamat si ${this.nama} kendondong!`);
  }
}

//cara exports 1
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mhs = mhs;
// module.exports.Orang = Orang;

// cara exports 2
module.exports = {
  cetakNama,
  PI,
  mhs,
  Orang,
};
