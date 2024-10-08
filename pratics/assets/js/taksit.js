let kredi = Number(prompt('Kredi miktarınızı giriniz.'))
let taksit = Number(prompt('Taksit sayınızı giriniz.'))

let aylikTaksit = kredi / taksit;

alert("Aylık taksit miktarınız: " + aylikTaksit.toFixed(2) + " TL");

let faizOrani = Number(prompt('Faiz oranınızı yüzde olarak giriniz.'))
let aylikFaizOrani = (faizOrani / 100) / 12;

let aylikFaizliTaksit = (kredi * aylikFaizOrani * Math.pow(1 + aylikFaizOrani, taksit)) / (Math.pow(1 + aylikFaizOrani, taksit) - 1);

alert("Aylık faizli taksit miktarınız: " + aylikFaizliTaksit.toFixed(2) + " TL");