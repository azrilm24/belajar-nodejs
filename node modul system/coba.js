let sayHello = (nama) => `halo nama saya ${nama}`;
let PI = 3.91;
let mhs = {
  nama: "marhin",
  umur: 20,
  cetakMhs() {
    return `hal nama saya ${this.nama} usia ${this.umur}`;
  },
};

class Orang {
  constructor() {
    console.log("halo orang");
  }
}

// module.exports.sayHello = sayHello;
// module.exports.PI = PI;
// module.exports.mhs = mhs;
// module.exports.Orang = Orang;

// module.exports = {
//   sayHello: sayHello,
//   PI: PI,
//   mhs: mhs,
//   Orang: Orang,
// };

module.exports = {
  sayHello,
  PI,
  mhs,
  Orang,
};
