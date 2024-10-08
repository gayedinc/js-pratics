let day = Number(prompt('Haftanın Günlerini Hesaplama\nLütfen 1 ve 7 dahil olmak üzere 1-7 arasında yer alan sayılardan birini giriniz.\n Sayıya karşılık gelen gün karşınıza çıkacaktır.'));

switch (day) {
  case 1:
    alert('Pazartesi');
    break;

  case 2:
    alert('Salı');
    break;

  case 3:
    alert('Çarşamba');
    break;

  case 4:
    alert('Perşembe');
    break;

  case 5:
    alert('Cuma');
    break;

  case 6:
    alert('Cumartesi');
    break;

  case 7:
    alert('Pazar');
    break;

  default:
    alert('Geçersiz bir sayı girdiniz ve karşılık gelen gün bulunamadı.');
}