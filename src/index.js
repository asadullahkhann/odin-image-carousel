import "./styles.css";

const slides = document.querySelectorAll(".slide");
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
}

function resetSlides() {
  slides.forEach((slide) => {
    slide.setAttribute("class", "slide hide");
  });
  circles.forEach((circle) => {
    circle.setAttribute("class", "circle");
  });
}

function showSlides() {
  resetSlides();
  slides[slideIndex].setAttribute("class", "slide");
  circles[slideIndex].setAttribute("class", "circle filled");
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
