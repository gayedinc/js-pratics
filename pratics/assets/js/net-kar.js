let satisBedeli = Number(prompt("Satış bedelini girin"));
let satisMaliyeti = Number(prompt("Maliyet tutarını girin (0 girilebilir)"));

const kdvOrani = 0.20;
let kdvTutari = satisBedeli * kdvOrani;
let toplamSatisBedeli = satisBedeli + kdvTutari;

let netKar;
if (satisMaliyeti > 0) {
  netKar = (satisBedeli - satisMaliyeti) + kdvTutari;
} else {
  netKar = satisBedeli + kdvTutari;
}

const gelirVergisiOrani = 0.25;
let gelirVergisi = netKar * gelirVergisiOrani;

alert("Toplam satış bedeli (KDV dahil): " + toplamSatisBedeli.toFixed(2) + " TL\n" + "Net kar: " + netKar.toFixed(2) + " TL\n" + "Gelir vergisi: " + gelirVergisi.toFixed(2) + " TL");
