  document.getElementById("kadoIn").onclick = function() {if(fungsiAwal==0){audio.play();fungsiAwal=1;kadoIn.style="transition:all .8s ease;transform:scale(10);opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(initengahan,300);setTimeout(inipesan,500)}}

  function initengahan(){
    kadoIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:2vh";
    bodyblur.style="opacity:.3";
    wallpaper.style="transform: scale(1.5);";
  }
  
  async function mulainama() {
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1);";
    fotostiker.style="display:inline-flex;";setTimeout(ftmuncul,200);
    setTimeout(kethalo,500);setInterval(berjatuhan,400);
  }
  
  function ftmuncul(){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
  function fthilang(){fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";setInterval(berjatuhan,200);}
  
  function kethalo(){
  new TypeIt("#halo", {
  strings: ["" + vketikhalo], startDelay: 50, speed: 30, waitUntilVisible: true,
  afterComplete: function(){
    halo.innerHTML = vketikhalo;
    setTimeout(bqmuncul,200);
  },}).go();
  }
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transform: skew(-3deg, 0deg);-webkit-transform: skew(-3deg, 0deg);margin-top:0";mulaiketik1();fungsi=1;}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}

  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";fungsi=1}
  document.getElementById("By").onclick = function() {if(fungsi==1){menuju();}}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 400, speed: 50, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    setTimeout(mulaiketik2,500);
  },}).go();
  }
  vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";
  function mulaiketik2(){
  new TypeIt("#kalimatb", {
  strings: ["" + vketik2], startDelay: 1, speed: 50, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    tombol();
  },}).go();
}
