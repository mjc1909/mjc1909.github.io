
const slide = document.querySelector('.slider-slide')


let currentImageIndex = 0;

let images =[
    'img/images/slider1.jpg',
    'img/images/slider2.jpg',
    'img/images/slider3.jpg'
]
//Funktionen sørger for at give <img> en src attribute. - Hver gang funktionen køres opdateres src attributen//
function setActiveSlide(index){
    slide.setAttribute('src', images [index])
}
setActiveSlide(currentImageIndex)

function next(){
    if(currentImageIndex >= images.length - 1){
    currentImageIndex = 0;
    }else{
        currentImageIndex += 1;
    }
    setActiveSlide(currentImageIndex)
}



setInterval(next, 4000 )

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

function myFunction(){
    alert("Dit abonnement er blevet oprettet");
  }


