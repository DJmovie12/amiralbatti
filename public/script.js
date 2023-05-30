const btn_basla=document.getElementById('basla');
const gemi1=document.getElementById('gemi1');
const gemi2=document.getElementById('gemi2');
const gemi3=document.getElementById('gemi3');
const gemi4=document.getElementById('gemi4');
const dondur1=document.getElementById('dondur1');
const dondur2=document.getElementById('dondur2');
const dondur3=document.getElementById('dondur3');
const dondur4=document.getElementById('dondur4');
const btn_pc=document.getElementById('pcvs');
const anaekran=document.getElementById('ana-ekran');
const alan=document.getElementById('savas-alan');
const savas=document.getElementById('savas');
const osavas=document.getElementById('onlinesavas');
const bilgi=document.getElementById('bilgilendirme');
const sira=document.getElementById('sira');
const divler=document.getElementsByClassName('divler');
const geri=document.getElementById('geri-tus');
const gemi=document.getElementById('draggable');
const btn_player=document.getElementById('playervs');
const pcyer=document.getElementById('pcyer');
const kyer=document.querySelectorAll('alan');
const divs = document.querySelectorAll('div');
const popup =document.getElementById('popupc');
const tiklamama = document.querySelector('.pc-gemi-tiklandi');
const mesaj_el=document.getElementById('onaylanmismesaj');
const cizgi=document.getElementById('cizgi');
const btn_tekrar=document.getElementById('tekrar');
var kontrol = document.getElementById("draggable");




btn_pc.addEventListener("click", function() {
    btn_pc.classList="kapa";
    btn_player.classList="kapa";
    anaekran.classList="kapa";
    alan.classList="";
});
geri.addEventListener("click", function() {
  location.reload();
});
gemi1.addEventListener("dragstart", function() {
  dondur1.classList="basla";
  dondur2.classList="kapa";
  dondur3.classList="kapa";
  dondur4.classList="kapa";
});
gemi2.addEventListener("dragstart", function() {
  dondur1.classList="kapa";
  dondur2.classList="basla";
  dondur3.classList="kapa";
  dondur4.classList="kapa";
});
gemi3.addEventListener("dragstart", function() {
  dondur1.classList="kapa";
  dondur2.classList="kapa";
  dondur3.classList="basla";
  dondur4.classList="kapa";
});
gemi4.addEventListener("dragstart", function() {
  dondur1.classList="kapa";
  dondur2.classList="kapa";
  dondur3.classList="kapa";
  dondur4.classList="basla";
});
dondur1.addEventListener("click", function() {
  let gemi1id = parseInt(gemi1.parentElement.id);
  let gemi1ust= gemi1id - 10;
  let gemi1alt = gemi1id + 10;
  let gemi1ustt=gemi1id - 20;
  let gemi1altt=gemi1id + 20;
  let ust = document.getElementById(gemi1ust);
  let ustt = document.getElementById(gemi1ustt);
  let altt = document.getElementById(gemi1altt);
  let alt = document.getElementById(gemi1alt);
  let orta = document.getElementById(gemi1id);
  if (ust) {
    if(ustt.className=="alan-kopya"){ustt.className = "alan-kopya";}else if(ustt.className=="gemili-alan"){ustt.className=="gemili-alan";}else{ustt.className = "etkilesimsiz-alan";}
    if(ust.className=="alan-kopya"){ust.className = "gemili-alann";}else{ust.className = "gemili-alan";}
    if(orta.nextElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
        orta.nextElementSibling.classList="alan-kopya";
    }else{orta.nextElementSibling.classList="alan";}

    if(orta.nextElementSibling && orta.nextElementSibling.nextElementSibling && orta.nextElementSibling.nextElementSibling.className=="etkilesimsiz-alan"){
      orta.nextElementSibling.nextElementSibling.className="alan";
    }
  }
  if (alt) {
    if(altt==null){}else{
    if (altt.className == "alan-kopya") {
      altt.className = "alan-kopya";
    } else if (altt.className == "gemili-alan") {
      altt.className = "gemili-alan";
    } else {
      altt.className = "etkilesimsiz-alan";
    }
  }
    if(alt.className=="alan-kopya"){alt.className = "gemili-alann";}else{alt.className = "gemili-alan";
  }
    if(orta.previousElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
      orta.previousElementSibling.classList="alan-kopya";
    }else{orta.previousElementSibling.classList="alan";}

    if (orta.previousElementSibling && orta.previousElementSibling.previousElementSibling && orta.previousElementSibling.previousElementSibling.className == "etkilesimsiz-alan"){
      orta.previousElementSibling.previousElementSibling.className="alan";
    }
  }
  gemi1.addEventListener('dragstart', function(event) {
    if(ustt.className==="etkilesimsiz-alan"){
      ustt.className="alan";
    }if(altt==null){}else {
      if (altt.className === "etkilesimsiz-alan") {
      altt.className="alan";
      }
      else if (altt.className === "gemili-alan") {
        altt.className="gemili-alan";
      }
    }
    if (ust.className === 'gemili-alan' || alt.className === 'gemili-alan') {
      
      if (ust.className === 'gemili-alan') {
        ust.className = 'alan';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
      
      if (alt.className === 'gemili-alan') {
        alt.className = 'alan';
      }
      else if(alt.className === 'gemili-alann'){
        alt.className = 'alan-kopya';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
    }
  });
});
dondur2.addEventListener("click", function() {
  let gemi1id = parseInt(gemi2.parentElement.id);
  let gemi1ust= gemi1id - 10;
  let gemi1alt = gemi1id + 10;
  let gemi1ustt=gemi1id - 20;
  let gemi1altt=gemi1id + 20;
  let ust = document.getElementById(gemi1ust);
  let ustt = document.getElementById(gemi1ustt);
  let altt = document.getElementById(gemi1altt);
  let alt = document.getElementById(gemi1alt);
  let orta = document.getElementById(gemi1id);
  if (ust) {
    if(ustt.className=="alan-kopya"){ustt.className = "alan-kopya";}else if(ustt.className=="gemili-alan"){ustt.className=="gemili-alan";}else{ustt.className = "etkilesimsiz-alan";}
    if(ust.className=="alan-kopya"){ust.className = "gemili-alann";}else{ust.className = "gemili-alan";}
    if(orta.nextElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
        orta.nextElementSibling.classList="alan-kopya";
    }else{orta.nextElementSibling.classList="alan";}

    if(orta.nextElementSibling && orta.nextElementSibling.nextElementSibling && orta.nextElementSibling.nextElementSibling.className=="etkilesimsiz-alan"){
      orta.nextElementSibling.nextElementSibling.className="alan";
    }
  }
  if (alt) {
    if(altt==null){}else{
    if (altt.className == "alan-kopya") {
      altt.className = "alan-kopya";
    } else if (altt.className == "gemili-alan") {
      altt.className = "gemili-alan";
    } else {
      altt.className = "etkilesimsiz-alan";
    }
  }
    if(alt.className=="alan-kopya"){alt.className = "gemili-alann";}else{alt.className = "gemili-alan";
  }
    if(orta.previousElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
      orta.previousElementSibling.classList="alan-kopya";
    }else{orta.previousElementSibling.classList="alan";}

    if (orta.previousElementSibling && orta.previousElementSibling.previousElementSibling && orta.previousElementSibling.previousElementSibling.className == "etkilesimsiz-alan"){
      orta.previousElementSibling.previousElementSibling.className="alan";
    }
  }
  gemi2.addEventListener('dragstart', function(event) {
    if(ustt.className==="etkilesimsiz-alan"){
      ustt.className="alan";
    }if(altt==null){}else {
      if (altt.className === "etkilesimsiz-alan") {
      altt.className="alan";
      }
      else if (altt.className === "gemili-alan") {
        altt.className="gemili-alan";
      }
    }
    if (ust.className === 'gemili-alan' || alt.className === 'gemili-alan') {
      
      if (ust.className === 'gemili-alan') {
        ust.className = 'alan';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
      
      if (alt.className === 'gemili-alan') {
        alt.className = 'alan';
      }
      else if(alt.className === 'gemili-alann'){
        alt.className = 'alan-kopya';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
    }
  });
});
dondur3.addEventListener("click", function() {
  let gemi1id = parseInt(gemi3.parentElement.id);
  let gemi1ust= gemi1id - 10;
  let gemi1alt = gemi1id + 10;
  let gemi1ustt=gemi1id - 20;
  let gemi1altt=gemi1id + 20;
  let ust = document.getElementById(gemi1ust);
  let ustt = document.getElementById(gemi1ustt);
  let altt = document.getElementById(gemi1altt);
  let alt = document.getElementById(gemi1alt);
  let orta = document.getElementById(gemi1id);
  if (ust) {
    if(ustt.className=="alan-kopya"){ustt.className = "alan-kopya";}else if(ustt.className=="gemili-alan"){ustt.className=="gemili-alan";}else{ustt.className = "etkilesimsiz-alan";}
    if(ust.className=="alan-kopya"){ust.className = "gemili-alann";}else{ust.className = "gemili-alan";}
    if(orta.nextElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
        orta.nextElementSibling.classList="alan-kopya";
    }else{orta.nextElementSibling.classList="alan";}

    if(orta.nextElementSibling && orta.nextElementSibling.nextElementSibling && orta.nextElementSibling.nextElementSibling.className=="etkilesimsiz-alan"){
      orta.nextElementSibling.nextElementSibling.className="alan";
    }
  }
  if (alt) {
    if(altt==null){}else{
    if (altt.className == "alan-kopya") {
      altt.className = "alan-kopya";
    } else if (altt.className == "gemili-alan") {
      altt.className = "gemili-alan";
    } else {
      altt.className = "etkilesimsiz-alan";
    }
  }
    if(alt.className=="alan-kopya"){alt.className = "gemili-alann";}else{alt.className = "gemili-alan";
  }
    if(orta.previousElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
      orta.previousElementSibling.classList="alan-kopya";
    }else{orta.previousElementSibling.classList="alan";}

    if (orta.previousElementSibling && orta.previousElementSibling.previousElementSibling && orta.previousElementSibling.previousElementSibling.className == "etkilesimsiz-alan"){
      orta.previousElementSibling.previousElementSibling.className="alan";
    }
  }
  gemi3.addEventListener('dragstart', function(event) {
    if(ustt.className==="etkilesimsiz-alan"){
      ustt.className="alan";
    }if(altt==null){}else {
      if (altt.className === "etkilesimsiz-alan") {
      altt.className="alan";
      }
      else if (altt.className === "gemili-alan") {
        altt.className="gemili-alan";
      }
    }
    if (ust.className === 'gemili-alan' || alt.className === 'gemili-alan') {
      
      if (ust.className === 'gemili-alan') {
        ust.className = 'alan';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
      
      if (alt.className === 'gemili-alan') {
        alt.className = 'alan';
      }
      else if(alt.className === 'gemili-alann'){
        alt.className = 'alan-kopya';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
    }
  });
});
dondur4.addEventListener("click", function() {
  let gemi1id = parseInt(gemi4.parentElement.id);
  let gemi1ust= gemi1id - 10;
  let gemi1alt = gemi1id + 10;
  let gemi1ustt=gemi1id - 20;
  let gemi1altt=gemi1id + 20;
  let ust = document.getElementById(gemi1ust);
  let ustt = document.getElementById(gemi1ustt);
  let altt = document.getElementById(gemi1altt);
  let alt = document.getElementById(gemi1alt);
  let orta = document.getElementById(gemi1id);
  if (ust) {
    if(ustt.className=="alan-kopya"){ustt.className = "alan-kopya";}else if(ustt.className=="gemili-alan"){ustt.className=="gemili-alan";}else{ustt.className = "etkilesimsiz-alan";}
    if(ust.className=="alan-kopya"){ust.className = "gemili-alann";}else{ust.className = "gemili-alan";}
    if(orta.nextElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
        orta.nextElementSibling.classList="alan-kopya";
    }else{orta.nextElementSibling.classList="alan";}

    if(orta.nextElementSibling && orta.nextElementSibling.nextElementSibling && orta.nextElementSibling.nextElementSibling.className=="etkilesimsiz-alan"){
      orta.nextElementSibling.nextElementSibling.className="alan";
    }
  }
  if (alt) {
    if(altt==null){}else{
    if (altt.className == "alan-kopya") {
      altt.className = "alan-kopya";
    } else if (altt.className == "gemili-alan") {
      altt.className = "gemili-alan";
    } else {
      altt.className = "etkilesimsiz-alan";
    }
  }
    if(alt.className=="alan-kopya"){alt.className = "gemili-alann";}else{alt.className = "gemili-alan";
  }
    if(orta.previousElementSibling.classList=="gemili-alann" || orta.nextElementSibling.classList=="alan-kopya"){
      orta.previousElementSibling.classList="alan-kopya";
    }else{orta.previousElementSibling.classList="alan";}

    if (orta.previousElementSibling && orta.previousElementSibling.previousElementSibling && orta.previousElementSibling.previousElementSibling.className == "etkilesimsiz-alan"){
      orta.previousElementSibling.previousElementSibling.className="alan";
    }
  }
  gemi4.addEventListener('dragstart', function(event) {
    if(ustt.className==="etkilesimsiz-alan"){
      ustt.className="alan";
    }if(altt==null){}else {
      if (altt.className === "etkilesimsiz-alan") {
      altt.className="alan";
      }
      else if (altt.className === "gemili-alan") {
        altt.className="gemili-alan";
      }
    }
    if (ust.className === 'gemili-alan' || alt.className === 'gemili-alan') {
      
      if (ust.className === 'gemili-alan') {
        ust.className = 'alan';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
      
      if (alt.className === 'gemili-alan') {
        alt.className = 'alan';
      }
      else if(alt.className === 'gemili-alann'){
        alt.className = 'alan-kopya';
      }else if(ust.className === 'gemili-alann'){
        ust.className = 'alan-kopya';
      }
    }
  });
});


savas.addEventListener("click", function() {
    var childCount = kontrol.childElementCount;
    if(childCount>0){alert('Lütfen Gemileri Yerleştiriniz');}
    else{
    bilgi.classList ="kapa";
    sira.classList="sira";
    gemi.classList="kapa";
    pcyer.classList="pc";
    cizgi.classList="";
    savas.classList="kapa";
    divs.forEach(function(div) {
      if (div.classList.contains('gemili-alan') || div.classList.contains('gemili-alann') || div.classList.contains('gemili-alannn')) {
        console.log(div.id);
      }
    });
// Gemilerin konumlarını tutacak boş dizi oluşturalım
var gemiKonumlari = [];

// 3 haneli rastgele sayı üreten fonksiyon
function rastgeleSayi() {
  return Math.floor(Math.random() * 1000);
}

// Yeni bir gemi konumu üreten fonksiyon
function yeniGemiKonumu() {
  var konum = rastgeleSayi() % 100; // 0-99 arası bir sayı alalım

  // Konumun son rakamı 8 veya 9 ise üç haneli sayıların son rakamını 7'ye eşitleyelim
  if (konum % 10 >= 8) {
    konum -= konum % 100 + 7;
    if (konum < 0) {
      konum += 100;
    }
  }

  // Eğer konum zaten bir geminin yer aldığı hücrelerden birinde ise yeni bir konum üretelim
  if (gemiKonumlari.some(function(gemiKonumu) {
      return gemiKonumu.includes(konum) || gemiKonumu.includes(konum + 1) || gemiKonumu.includes(konum + 2);
    })) {
    return yeniGemiKonumu(); // Yeniden dene
  }

  // Konumu diziye ekle ve geri döndür
  gemiKonumlari.push([konum, konum + 1, konum + 2]);
  return gemiKonumlari[gemiKonumlari.length - 1];
}

// Dört gemi konumu oluşturalım
var gemi1 = yeniGemiKonumu();
var gemi2 = yeniGemiKonumu();
var gemi3 = yeniGemiKonumu();
var gemi4 = yeniGemiKonumu();

// Test için gemilerin konumlarını konsola yazdıralım
console.log(gemi1);
console.log(gemi2);
console.log(gemi3);
console.log(gemi4);
console.log(gemiKonumlari);

    var gemialan = [];
    var gemialan2 = [];
    var gemialan3 = [];
    var gemialan4 = [];
    
    // // İlk gemi
    for (i = 0; i < 3; i++) {
      gemialan[i] = document.getElementById(gemiKonumlari[0][i]);
      gemialan[i].className = "pc-gemi";
    }
    // // İkinci gemi
    for (i = 0; i < 3; i++) {
      gemialan2[i] = document.getElementById(gemiKonumlari[1][i]);
      gemialan2[i].className = "pc-gemi";
    }
    // // Üçüncü gemi
    for (i = 0; i < 3; i++) {
      gemialan3[i] = document.getElementById(gemiKonumlari[2][i]);
      gemialan3[i].className = "pc-gemi";
    }
    // // Dördüncü gemi
    for (i = 0; i < 3; i++) {
      gemialan4[i] = document.getElementById(gemiKonumlari[3][i]);
      gemialan4[i].className = "pc-gemi";
    }
    kullaniciSira();
    let alan = document.querySelectorAll(".alan");
    for(let i = 0; i < alan.length; i++) {
      if(alan[i].className=="alan"){
        alan[i].className="alans";
      }
      if(alan[i].nextElementSibling.className=="gemili-alan"||alan[i].nextElementSibling.className=="gemili-alan"){
        alan[i].className="alans";
      }
      if(alan[i].previousElementSibling.className=="alan"){
        alan[i].className="alans";
      }
    }
    dondur1.classList="kapa";
    dondur2.classList="kapa";
    dondur3.classList="kapa";
    dondur4.classList="kapa";
}});
btn_player.addEventListener("click", function() {
  btn_pc.classList="kapa";
  btn_player.classList="kapa";
  anaekran.classList="kapa";
  savas.classList="kapa";
  osavas.classList="basla";
  alan.classList="";
});
osavas.addEventListener("click", function() {
  var childCount = kontrol.childElementCount;
  if (childCount > 0) {
    alert('Lütfen Gemileri Yerleştiriniz');
  } else {
            var idList = [];
        divs.forEach(function(div) {
          if (div.classList.contains('gemili-alan') || div.classList.contains('gemili-alann') || div.classList.contains('gemili-alannn')) {
            idList.push(div.id);
          }
        });

        fetch('https://amiral-batti.herokuapp.com/idList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ idList: idList })
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    window.location.href = "https://amiral-batti.herokuapp.com/osavas";
  }
});

var dragged;

document.addEventListener("dragstart", function(event) {
    dragged = event.target;
    var parentDiv = dragged.parentElement;
    if (parentDiv.className == "gemili-alan") {
      parentDiv.className = "alan";
    }
    
    var leftDiv = parentDiv.previousElementSibling;
    if (leftDiv != null) {
      if (leftDiv.className == "gemili-alan") {
        leftDiv.className = "alan";
      } else if (leftDiv.className == "gemili-alann") {
        leftDiv.className = "alan-kopya";
      } else if (leftDiv.className == "gemili-alannn") {

        leftDiv.className = "etkilesimsiz-alan";
      }
        var leftdivv = leftDiv.previousElementSibling;
        if (leftdivv != null && leftdivv.className == "etkilesimsiz-alan") {
          leftdivv.className = "alan";
        }
    }
    
    var rightDiv = parentDiv.nextElementSibling;
    if (rightDiv != null) {
      if (rightDiv.className == "gemili-alan") {
        rightDiv.className = "alan";
      } else if (rightDiv.className == "gemili-alann") {
        rightDiv.className = "alan-kopya";
      } else if (rightDiv.className == "gemili-alannn") {
        rightDiv.className = "etkilesimsiz-alan";
    }
        var rightdivv = rightDiv.nextElementSibling;
        if (rightdivv != null && rightdivv.className == "etkilesimsiz-alan") {
          rightdivv.className = "alan";
        }
        
      }
    
  }, false);

document.addEventListener("dragend", function(event) {
    var parentDiv = dragged.parentElement;
    if (parentDiv.className == "alan") {
        parentDiv.className = "gemili-alan";
    }
    var leftDiv = parentDiv.previousElementSibling;
    if (leftDiv != null && leftDiv.className == "alan") {
        leftDiv.className = "gemili-alan";
    }
    if(leftDiv != null && leftDiv.className=="alan-kopya")
    {
       leftDiv.className = "gemili-alann";
    }
    if(leftDiv != null && leftDiv.className=="etkilesimsiz-alan")
    {
       leftDiv.className = "gemili-alannn";
    }
    var previousSibling = parentDiv.previousElementSibling;
    if (previousSibling && previousSibling.previousElementSibling) {
    var secondpreviousSibling = previousSibling.previousElementSibling;
    if(secondpreviousSibling.className=="gemili-alan"){
        secondpreviousSibling.className=="gemili-alan";
    }else if(secondpreviousSibling.className=="alan-kopya"){
        secondpreviousSibling.className=="alan-kopya";
    }
    else{secondpreviousSibling.className = "etkilesimsiz-alan";}
        
    }
    var rightDiv = parentDiv.nextElementSibling;
    if (rightDiv != null && rightDiv.className == "alan") {
        rightDiv.className = "gemili-alan";
    }
    if(rightDiv != null && rightDiv.className=="alan-kopya")
    {
       rightDiv.className = "gemili-alann";
    }
    if(rightDiv != null && rightDiv.className=="etkilesimsiz-alan")
    {
       rightDiv.className = "gemili-alannn";
    }
    var nextSibling = parentDiv.nextElementSibling;
    if (nextSibling && nextSibling.nextElementSibling) {
    var secondNextSibling = nextSibling.nextElementSibling;
    if(secondNextSibling.className=="gemili-alan"){
        secondNextSibling.className =="gemili-alan";
    }else if(secondNextSibling.className=="alan-kopya"){
        secondNextSibling.className=="alan-kopya";
    }
    else{secondNextSibling.className = "etkilesimsiz-alan";}

    }
}, false);

document.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    if (event.target.className == "alan") {
        event.target.style.background = "purple";
    }
    if(event.target.className=="etkilesimsiz-alan"){
      event.target.style.background = "black";
    }
    if(event.target.className=="alan-kopya"){
      event.target.style.background = "black";
    }
}, false);

document.addEventListener("dragleave", function(event) {
    if (event.target.className == "alan") {
        event.target.style.background = "";
    }
    if (event.target.className == "etkilesimsiz-alan") {
      event.target.style.background = "";
    }
    if(event.target.className=="alan-kopya"){
      event.target.style.background = "";
    }
}, false);


document.addEventListener("drop", function(event) {
    event.preventDefault();
    if(event.target.className=="alan-kopya"){
      event.target.style.background = "";
    }
    if(event.target.className=="etkilesimsiz-alan"){
      event.target.style.background = "";
    }
    if (event.target.className == "alan") {
        event.target.style.background = "";
        event.target.className = "gemili-alan";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);


var sayilar = []; // oluşturulan sayıları saklamak için boş bir dizi

function randomSayi() {
  var sayi = Math.floor(Math.random() * 100) + 101; // 100-199 arasında rastgele bir sayı oluşturur
  if (sayilar.includes(sayi)) { // oluşturulan sayı daha önce diziye eklenmiş mi?
    return randomSayi(); // eğer öyleyse fonksiyonu tekrar çağırarak yeni bir sayı oluşturur
  } else {
    sayilar.push(sayi); // sayı diziye eklenir
    return sayi; // fonksiyon sonucu olarak sayı döndürülür
  }
}
var sagbos;
var sagboss;
var sagbosss;
var sagbossss;
var sagbosssss;
var sagbossssss;
var pcrasttut;
function kullaniciSira(){
 var alanDivleri = document.querySelectorAll(".pcalan , .pc-gemi");
 var gemiSayisi = document.querySelectorAll(".pc-gemi").length;
 var gemisayisii= gemiSayisi*2;

for (var n = 0; n < alanDivleri.length; n++) {
  alanDivleri[n].addEventListener("click", function(event) {
    if(event.target.className=="pc-gemi-tiklandi"||event.target.className=="kullanici-bos-secti"){
      alert("Bu Alana Zaten Tıkladınız");
      return;
    }else{
    if (event.target.className=="pc-gemi"||event.target.className=="pc-alan-kapaa") {
      console.log("gemiye tıklandı");
      event.target.classList="pc-gemi-tiklandi";
      gemiSayisi++;
      console.log(gemiSayisi);
      console.log(gemisayisii);
      if (gemiSayisi === gemisayisii) {
        popup.style.display= 'flex';
        mesaj_el.innerText='Kazandınız';
      }
     else {
      console.log(event.target.id);
    }return;
    }else{
       if (event.target.className=="pc-alan-kapa"){
        alert("sıra bilgisayarda");
       }else{sira.innerText="Sıra Bilgisayarda";}
       

      var divlerikapat = document.querySelectorAll(".pcalan");
      var divlerikapatt = document.querySelectorAll(".pc-gemi");
      for (var m = 0; m < divlerikapat.length; m++) {
        divlerikapat[m].classList=("pc-alan-kapa");
      }
      for (var l = 0; l < divlerikapatt.length; l++) {
        divlerikapatt[l].classList=("pc-alan-kapaa");
      }
      event.target.className="kullanici-bos-secti";
      pcSira();
      event.stopPropagation();
    }
      function pcSira(){
    setTimeout(function() {
     
        var pcrast = randomSayi();
        var kalanDivleri = document.querySelectorAll(".alan, .alans , .alan-kopya, .etkilesimsiz-alan");
        var gemiDivleri = document.querySelectorAll(".gemili-alan , .gemili-alann , .gemili-alannn");
        var gemiDivleriSayisi = document.querySelectorAll(".gemili-alan , .gemili-alann , .gemili-alannn").length;
        console.log(pcrast+"sayisina tıkladı");
        for (var i = 0; i < gemiDivleri.length; i++) {
          if(sagbos==1){
            let pcrasttut1=pcrasttut-1;
            let pcrasttut2=pcrasttut1-1;
            if (pcrasttut1 ==  gemiDivleri[i].id) {
              gemiDivleri[i].className="pc-secti";
              gemiDivleriSayisi--;
              console.log(pcrasttut2);
              sayilar.push(pcrasttut1);
              console.log("bu çalıştı");
              i--;
              if (pcrasttut2 ==  gemiDivleri[i].id) {
                gemiDivleri[i].className="pc-secti";
                gemiDivleriSayisi--;
                console.log("sağ bos 2 adım git")
                console.log(pcrasttut);
                sayilar.push(pcrasttut2);
                sagbos=0;
                console.log("bu çalıştıııııııı");
                if (gemiDivleriSayisi === 0) {
                  popup.style.display= 'flex';
                  mesaj_el.innerText='Kaybettiniz.';
                }
              }

          }
          }else if(sagboss==1){
            let pcrasttut3=pcrasttut-1;
            if (pcrasttut3 ==  gemiDivleri[i].id) {
              gemiDivleri[i].className="pc-secti";
              gemiDivleriSayisi--;
              console.log("sağ bos 1 adım git")
              console.log(pcrasttut);
              sayilar.push(pcrasttut3);
              sagboss=0;
              if (gemiDivleriSayisi === 0) {
                popup.style.display= 'flex';
                mesaj_el.innerText='Kaybettiniz.';
              }
            }

          }else if(sagbosss==1){
            console.log("calıstı");
            let pcrasttut4=pcrasttut-1;
            let pcrasttut5=pcrasttut4-1;
            if (pcrasttut4 ==  gemiDivleri[i].id) {
              gemiDivleri[i].className="pc-secti";
              gemiDivleriSayisi--;
              console.log(pcrasttut5);
              sayilar.push(pcrasttut4);
              console.log("bu çalıştı");
              i--;
              if (pcrasttut5 ==  gemiDivleri[i].id) {
                gemiDivleri[i].className="pc-secti";
                gemiDivleriSayisi--;
                console.log("sağ bos 2 adım git")
                console.log(pcrasttut);
                sayilar.push(pcrasttut5);
                sagbosss=0;
                console.log("bu çalıştıııııııı");
                if (gemiDivleriSayisi === 0) {
                  popup.style.display= 'flex';
                  mesaj_el.innerText='Kaybettiniz.';
                }
              }
            }
          }else if(sagbossss==1){
            let pcrasttut6=pcrasttut-1;
            if (pcrasttut6 ==  gemiDivleri[i].id) {
              gemiDivleri[i].className="pc-secti";
              gemiDivleriSayisi--;
              console.log("sağ bos 1 adım gitttttttt");
              console.log(pcrasttut);
              sayilar.push(pcrasttut6);
              sagbossss=0;
              if (gemiDivleriSayisi === 0) {
                popup.style.display= 'flex';
                mesaj_el.innerText='Kaybettiniz.';
              }
            }
          }
          else if (pcrast == gemiDivleri[i].id) { 
            gemiDivleri[i].className="pc-secti";
            console.log("pc gemiye tıkladı");
            gemiDivleriSayisi--;
              var pcrast1=pcrast+1;
              var pcrast2=pcrast1+1;
              i++;
              if (gemiDivleriSayisi === 0) {
                popup.style.display= 'flex';
                mesaj_el.innerText='Kaybettiniz.';
              }
              //gemdivlerinin idsini kontrol etme
              if (!gemiDivleri[i]) {
                console.log("idsiyok")
                for (let b = 0; b < kalanDivleri.length; b++) {
                  if(pcrast1==kalanDivleri[b].id){
                  kalanDivleri[b].className="pc-bos-secti";
                  console.log("idsiyok calsıtı")
                  
                  pcrasttut=pcrast;
                  }
                }sagbosss=1;
              }else{
                console.log("idsiyok atladı")
              if (pcrast1 ==  gemiDivleri[i].id) {
                gemiDivleri[i].className="pc-secti";
                gemiDivleriSayisi--;
                sayilar.push(pcrast1);
                i++;
                if (gemiDivleriSayisi === 0) {
                  popup.style.display= 'flex';
                  mesaj_el.innerText='Kaybettiniz.';
                }
                if (!gemiDivleri[i]) {
                  let divlerikapatttt = document.querySelectorAll(".pc-alan-kapa");
                  let divlerikapattttt = document.querySelectorAll(".pc-alan-kapaa");
                  for (let j = 0; j < divlerikapatttt.length; j++) {
                    divlerikapatttt[j].className="pcalan";
                  }
                  for (let k = 0; k < divlerikapattttt.length; k++) {
                    divlerikapattttt[k].className="pc-gemi";
                  }
                  for (var b = 0; b < kalanDivleri.length; b++) {if(pcrast2==kalanDivleri[b].id){kalanDivleri[b].className="pc-bos-secti";}}
                  sagbossss=1;
                  pcrasttut=pcrast;
                  console.log("sağ taraf idsiz");
                  sira.innerText="Sıra Sizde";
                  return;
                }else{
                if (pcrast2 ==  gemiDivleri[i].id) {
                    gemiDivleri[i].className="pc-secti";
                    gemiDivleriSayisi--;
                    sayilar.push(pcrast2);
                    if (gemiDivleriSayisi === 0) {
                      popup.style.display= 'flex';
                      mesaj_el.innerText='Kaybettiniz.';
                    }
                    pcSira();
                 
                }else{
                  let divlerikapatttt = document.querySelectorAll(".pc-alan-kapa");
                  let divlerikapattttt = document.querySelectorAll(".pc-alan-kapaa");
                  for (let j = 0; j < divlerikapatttt.length; j++) {
                    divlerikapatttt[j].className="pcalan";
                  }
                  for (let k = 0; k < divlerikapattttt.length; k++) {
                    divlerikapattttt[k].className="pc-gemi";
                  }
                  for (var b = 0; b < kalanDivleri.length; b++) {if(pcrast2==kalanDivleri[b].id){kalanDivleri[b].className="pc-bos-secti";}}
                  sagboss=1;
                  pcrasttut=pcrast;
                  console.log("sağ taraf boşşşşşş");
                  sira.innerText="Sıra Sizde";
                  return;
                }
              }
              }
              else{for (let b = 0; b < kalanDivleri.length; b++){
                for (var n = 0; n < kalanDivleri.length; n++) {if(pcrast1==kalanDivleri[n].id){kalanDivleri[n].className="pc-bos-secti";}}
                let divlerikapattt = document.querySelectorAll(".pc-alan-kapa");
                let divlerikapatttt = document.querySelectorAll(".pc-alan-kapaa");
                for (let j = 0; j < divlerikapattt.length; j++) {
                  divlerikapattt[j].className="pcalan";
                }
                for (let k = 0; k < divlerikapatttt.length; k++) {
                  divlerikapatttt[k].className="pc-gemi";
                }
                pcrasttut=pcrast;
                sagbos=1;
                console.log("sağ taraf boş");
                sira.innerText="Sıra Sizde";
                return;
                } 
              }
              }   
          }
        }
        var divlerikapattt = document.querySelectorAll(".pc-alan-kapa");
        var divlerikapatttt = document.querySelectorAll(".pc-alan-kapaa");
        for (var i = 0; i < divlerikapattt.length; i++) {
          divlerikapattt[i].className="pcalan";
        }
        for (var i = 0; i < divlerikapatttt.length; i++) {
          divlerikapatttt[i].className="pc-gemi";
        }
        sira.innerText="Sıra Sizde";
        for (var s = 0; s < kalanDivleri.length; s++) {if(pcrast==kalanDivleri[s].id){kalanDivleri[s].className="pc-bos-secti";}}

         return;
        
      }, 1500);
    }
}});}}
btn_tekrar.addEventListener('click',function(){
  location.reload();
});
