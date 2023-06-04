var sliderContainer = document.querySelector('.slider-container');
var sliderContent = document.querySelector('.slider-content');
var sliderPrev = document.querySelector('.slider-prev');
var sliderNext = document.querySelector('.slider-next');
var move = 0;
var slideWidth = sliderContainer.clientWidth;

if (slideWidth < 1000) {
  sliderContent.style.width =  slideWidth * sliderContent.children.length + 'px';
console.log(sliderContent.style.width);
sliderNext.addEventListener('click', function() {
  if (move < slideWidth * (sliderContent.children.length - 1)) {
    move += slideWidth;
    sliderContent.style.transform = 'translateX(-' + move + 'px)';
  }
});

sliderPrev.addEventListener('click', function() {
  if (move > 0) {
    move -= slideWidth;
    sliderContent.style.transform = 'translateX(-' + move + 'px)';
  }
});
}else {
  sliderContent.style.width =  slideWidth  + 'px';
console.log(sliderContent.style.width);
sliderNext.addEventListener('click', function() {
  if (move < slideWidth ) {
    move += slideWidth;
    sliderContent.style.transform = 'translateX(-' + move + 'px)';
  }
});

sliderPrev.addEventListener('click', function() {
  if (move > 0) {
    move -= slideWidth;
    sliderContent.style.transform = 'translateX(-' + move + 'px)';
  }
});}

var sliderContainer1 = document.querySelector('.slider-container1');
var sliderContent1 = document.querySelector('.slider-content1');
var sliderPrev1 = document.querySelector('.slider-prev1');
var sliderNext1 = document.querySelector('.slider-next1');
var move1 = 0;
var slideWidth1 = sliderContainer1.clientWidth;
if (slideWidth1 < 1000) {
  sliderContent1.style.width = slideWidth1 * sliderContent1.children.length + 'px';
sliderNext1.addEventListener('click', function() {
  if (move1 < slideWidth1 * (sliderContent1.children.length - 1)) {
    move1 += slideWidth1;
    sliderContent1.style.transform = 'translateX(-' + move1 + 'px)';
  }
});

sliderPrev1.addEventListener('click', function() {
  if (move1 > 0) {
    move1 -= slideWidth1;
    sliderContent1.style.transform = 'translateX(-' + move1 + 'px)';
  }
});
}else {
  sliderContent1.style.width = slideWidth1 + 'px'; 
  
  sliderNext1.addEventListener('click', function() {
    if (move1 < slideWidth1 ) {
      move1 += slideWidth1;
      sliderContent1.style.transform = 'translateX(-' + move1 + 'px)';
    }
  });
  sliderPrev1.addEventListener('click', function() {
    if (move1 > 0) {
      move1 -= slideWidth1;
      sliderContent1.style.transform = 'translateX(-' + move1 + 'px)';
    }});}
    const hamburguer = document.querySelector('.menunav');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(hamburguer);

hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click',e=>{
    if(menu.classList.contains("spread")
    &&e.target!=menu && e.target!=hamburguer){
        menu.classList.toggle('spread');
    }
})