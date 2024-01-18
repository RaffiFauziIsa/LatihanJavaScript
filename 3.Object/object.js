let buah = {
  nama: "Mangga",
  warna: "Hijau",
  Harga: "5000"
};

let sayur = new Object();
sayur.nama = "Kangkung"
sayur.harga = 2000;

console.log(buah);
console.log(sayur);

console.log(buah.warna);
console.log(buah.harga);
console.log(buah["nama"]);

const smartphone = {
  kamera: "10 MP",
  memori: "128 GB",
}
const fitur = "kamera";

console.log(smartphone.kamera);
console.log(smartphone["kamera"]);
console.log(smartphone[fitur])

smartphone.merek = "Ipon" 
