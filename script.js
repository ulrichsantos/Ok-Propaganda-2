// ----------  NAV-EXPANDED ---------- //

const itens = document.getElementById('itens');

let isExpanded = false

function clickMenu() {
  if(!isExpanded) {
    itens.className = "expanded"
    isExpanded = true
  } else {
    itens.className = "menu-nav"
    isExpanded = false
  }
}


// ----------  PRODUCTS ---------- //

let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;


document.querySelector('.slider-width').style.width = `${sliderWidth * totalSlides}px`;

document.querySelector('.slider-controls').style.width = `${document.querySelector('.slider').clientWidth}px`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if(currentSlide > (totalSlides-1)) {
    currentSlide = 0;
  }
  updateMargin();
  
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}

// ----------  CLIENTS ---------- //

const productContainers = [...document.querySelectorAll('.client-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

// ----------  OUTDOR ---------- //

document.getElementById('radio1').checked = true;
let count = 1;

setInterval(function() {
  nextImage()
}, 4000)

function nextImage() {
  count++;
  if(count > 5) {
    count = 1;
  }

  document.getElementById('radio'+ count).checked = true;

}