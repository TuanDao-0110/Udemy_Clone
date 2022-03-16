// TRUNCATE CARD TITLE 
window.addEventListener("load", function () {
  truncateCardTitle();
});

function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (var i = 0; i < cardList.length; i++) {
    var text = cardList[i].innerHTML;
    var newText = truncateString(text, 50);
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}


// SLIDER BAR MINI 

var  toggleBtn = document.querySelector('.slidebarMini__button');

var sidebarMini = document.querySelector('.slidebarMini');

var switchBtn = document.querySelector('#checkbox');
// toggle: có nghĩa là khi 1 sự kiện được diễn ra nó sẽ bỏ đi và thêm vào 
toggleBtn.addEventListener('click',function(){
sidebarMini.classList.toggle('is-opened')
});
switchBtn.addEventListener('click',function(){
  document.querySelector('body').classList.toggle('darkMode');
});
