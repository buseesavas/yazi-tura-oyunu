let tura = 0;
let yazi = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//Flip butonuna tıklanıldığında;
flipBtn.addEventListener('click' , () =>{
  //bana 0 veya 1 sayısını vermesi için; (0= tura, 1= yazı olarak kabul ediyorum.)
  let i = Math.floor(Math.random() * 2);
  //daha sonra kendim yapacağım için coin animasyonunu kapattım.
  coin.style.animation = "none";
  //eğer  i, 1 ise (yazı ise), 100 milisaniye sonra coine spin-tura fonksiyonunu uygula
  if(i) {
    setTimeout(() => {
      coin.style.animation = "spin-yazi 3s forwards";
    },100);
    tura++;
  }else {
    //eğer  i, 0 ise (tura ise), 100 milisaniye sonra coine spin-yazı fonksiyonunu uygula
    setTimeout(() => {
      coin.style.animation = "spin-tura 3s forwards";
    },100);
    yazi++;
  }
  //İstatistikleri güncelle ve butonu kısa bir süre devre dışı bırak.
  setTimeout(updateStats, 3000);
  disableButton();
});

//İstatiktikleri güncelleme fonksiyonu

function updateStats(){
  document.querySelector("#tura-count").textContent = `Tura: ${tura}`;
  document.querySelector("#yazi-count").textContent = `Yazı: ${yazi}`;
}

function disableButton(){
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  },3000)
}

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  tura = 0;
  yazi = 0;
  updateStats();
})