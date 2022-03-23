let isim = prompt("Adınız nedir?");
let name = document.querySelector("#myName");
isim ? (name.innerHTML = isim) : (name.innerHTML = "Anaonim");
let myClock = document.querySelector("#myClock");
let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
let d,h,m,s,clock,day;
setInterval(()=>{
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	day = d.getDay();
	
	myClock.innerHTML = `${addZero(h)}:${m}:${s}-${days[day]}`;
	},1000);
	
function addZero(n) {
  return n < 10 ? (n = "0" + n) : n;
}