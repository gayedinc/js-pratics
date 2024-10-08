let number1 = Number(prompt('En Büyük Sayıyı Bulma\nSırasıyla 3 sayı giriniz. Aralarından en büyük olan bulunacaktır.\n1. sayıyı giriniz:'))

let number2 = Number(prompt('2. sayıyı giriniz.'))

let number3 = Number(prompt('3. sayıyı giriniz.'))

let numbers = [number1, number2, number3];

numbers.sort(function (a, b) { return b - a });

alert('Girdiğiniz 3 sayıdan en büyüğü: ' + numbers[0]);
