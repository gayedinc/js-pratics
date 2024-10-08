let vizeNotu = Number(prompt('Lütfen vize notunuzu giriniz.'))

let finalNotu = Number(prompt('Lütfen final notunuzu giriniz.'))

let average = (vizeNotu * 0.40) + (finalNotu * 0.60)

if (average >= 50) {
  alert('Dersten başarıyla geçtiniz! ' + 'Not ortalamanız: ' + average)
}
else if (average >= 40 && average < 50) {
  alert('Dersten şartlı geçtiniz. ' + 'Not ortalamanız: ' + average)
}
else {
  alert('Dersten kaldınız :( ' + 'Not ortalamanız: ' + average);
}