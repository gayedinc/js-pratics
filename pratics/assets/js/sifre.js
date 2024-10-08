let userName = prompt('Kullanıcı adınızı giriniz.')

let userPassword = prompt('Kullanıcı şifrenizi giriniz.')

if (userName === "admin" && userPassword === "1234") {
  alert('Giriş başarılı!')
} else {
  alert('Kullanıcı adı veya şifre hatalı')
}