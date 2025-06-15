
let img1 = document.querySelector(".imgingrid1");

img1.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}

let img2 = document.querySelector(" .imgingrid2 ");

img2.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}

let img3 = document.querySelector(".imgingrid3");

img3.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}

let img4 = document.querySelector(".imgingrid4");

img4.onmousemove = function(e) {
  e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
  e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
}
