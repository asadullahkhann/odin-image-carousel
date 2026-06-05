import "./styles.css";

const slides = document.querySelectorAll(".slides > img");
const prevBtn = document.querySelector(".prev>button");
const nextBtn = document.querySelector(".next>button");
const circles = document.querySelectorAll(".circle");

let slideIndex = 0;

function nextSlide() {
  slideIndex = slideIndex === 9 ? 0 : slideIndex + 1
  showSlides();
}

function previousSlide() {
  slideIndex = slideIndex === 0 ? 9 : slideIndex - 1;
  showSlides();
  slides[slideIndex].classList.add("slide-backward");
}

function resetSlides() {
  slides.forEach((slide) => {
    slide.classList = "hide";
  });
  circles.forEach((circle) => {
    circle.classList = "circle";
  });
}

function showSlides() {
  resetSlides();
  slides[slideIndex].classList = "";
  circles[slideIndex].classList.add("filled");
}

prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);

showSlides();

setInterval(nextSlide, 5000);

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    const thisCircle = e.target;
    const thisCircleIndex = [...circles].indexOf(thisCircle);
    slideIndex = thisCircleIndex;
    showSlides();
  });
});
