const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".list-item");

const NUM_SLIDES = slides.length;
let currSlide = 0;

function slideTrack() {
  carousel.style.transform = `translateX(${-currSlide * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currSlide = (currSlide + 1) % NUM_SLIDES;
  slideTrack();
});

prevBtn.addEventListener("click", () => {
  currSlide = (currSlide - 1 + NUM_SLIDES) % NUM_SLIDES;
  slideTrack();
});
