function secondsToHour(d) {
  d = Number(d);
  let hour = Math.floor(d / 3600);
  let minute = Math.floor((d % 3600) / 60);
  let second = Math.floor(d % 60);

  return { hour, minute, second };
}

let userSecond = Number(prompt('Saniyeyi Saate, Dakikaya ve Saniyeye Çevirme\nLütfen 3600 saniyeden büyük bir saniye değeri girin.'));

if (userSecond > 3600) {
  let conclusion = secondsToHour(userSecond);
  alert(conclusion.hour + ' saat, ' + conclusion.minute + ' dakika, ' + conclusion.second + ' saniye.');
} else {
  alert('Lütfen 3600 saniyeden büyük bir değer girin.');
}
