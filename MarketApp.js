const user = {
  name: prompt("What is your name?"),
  age: prompt("What is your age?"),
  job: prompt("What is your job?")
};

console.log("Kullanıcı Bilgileri:", user);

// Sepet
const sepet = [];

// Ürün ekleme 
for (let i = 1; i <= 2; i++) {
  const urun = {
    name: prompt(`(${i}) Sepete eklemek istediğiniz ürünü yazın:`),
    price: Number(prompt(`(${i}) Ürünün fiyatı:`))
  };
  sepet.push(urun);
}

console.log("Sepetteki Ürünler:", sepet);

// Reduce kullanarak toplam fiyat hesaplama
const toplam = sepet.reduce((acc, curr) => acc + curr.price, 0);
console.log("Toplam paranız budur: " + toplam + " TL");

// Ürün çıkarma
const cikacakUrun = prompt("Çıkarmak istediğiniz ürünün adını yazın:");
const guncelSepet = sepet.filter(urun => urun.name !== cikacakUrun);

console.log("Güncel Sepet:", guncelSepet);