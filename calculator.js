function teglalap() {
    var a = parseInt(document.getElementById("teglalapa").value);
    var b = parseInt(document.getElementById("teglalapb").value);
  
    var kerulet = (a + b) * 2;
    document.getElementById("teglalap2").value = kerulet;
  
    var terulet = a * b;
    document.getElementById("teglalap1").value = terulet;
  }

  function rombusz() {
    var a = parseInt(document.getElementById("rombusza").value);
    var e = parseInt(document.getElementById("rombusze").value);
    var f = parseInt(document.getElementById("rombuszf").value);
  
    var kerulet = 4 * a;
    document.getElementById("rombusz2").value = kerulet;
  
    var terulet = e * f / 2;
    document.getElementById("rombusz1").value = terulet;
  }

  function kocka() {
    var a = parseInt(document.getElementById("kockaa").value);
  
    var felszin = 6 * a * a;
    document.getElementById("kocka1").value = felszin;
  
    var térfogat = a * a * a;
    document.getElementById("kocka2").value = térfogat;
  }

  function teglatest() {
    var a = parseInt(document.getElementById("teglatesta").value);
    var b = parseInt(document.getElementById("teglatestb").value);
    var c = parseInt(document.getElementById("teglatestc").value);
  
    var felszin = 2 * (a * b + a * c + b * c);
    document.getElementById("teglatest1").value = felszin;
  
    var térfogat = a * b * c;
    document.getElementById("teglatest2").value = térfogat;
  }

