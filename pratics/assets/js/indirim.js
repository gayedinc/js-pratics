let price = Number(prompt('Ürünün fiyatını giriniz.'))

let percent = Number(prompt('Ürünün indirim yüzdesini giriniz.'))

let markdown = Number(price * (percent / 100))

let newPrice = alert('Ürünün indirim sonucu değişen yeni fiyatı: ' + Number(price - markdown))