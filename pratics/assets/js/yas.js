let birthMonth = Number(prompt("Doğum ayınızı girin (1-12):"));
let birthDay = Number(prompt("Doğum gününüzü girin (1-31):"));
let birthYear = Number(prompt("Doğum yılınızı girin (YYYY):"));

let todayDate = new Date();
let todayYear = todayDate.getFullYear();
let todayMonth = todayDate.getMonth() + 1;
let todayDay = todayDate.getDate();

let age = todayYear - birthYear;

if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
  age--;
}

let monthDifference = todayMonth - birthMonth;
let dayDifference = todayDay - birthDay;

// Ayın negatif olmaması için
if (monthDifference < 0) {
  monthDifference += 12; // 12 ay ekle
}

// Günün negatif olmaması için
if (dayDifference < 0) {
  dayDifference += new Date(todayYear, todayMonth - 1, 0).getDate();
  monthDifference--;
}

document.write("Bugün itibarıyla " + age + " yıl, " + monthDifference + " ay, " + dayDifference + " gün yaşındasınız.");
