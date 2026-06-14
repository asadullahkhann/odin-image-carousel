import "./styles.css";

const slides = document.querySelectorAll(".slides > img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const circles = document.querySelectorAll(".circle");

let currentSlideIndex = 0;

function nextSlide() {
  currentSlideIndex = currentSlideIndex === 11 ? 0 : currentSlideIndex + 1
  showSlides();
}

function previousSlide() {
  currentSlideIndex = currentSlideIndex === 0 ? 11 : currentSlideIndex - 1;
  showSlides();
  slides[currentSlideIndex].classList.add("slide-backward");
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
  slides[currentSlideIndex].classList.remove('hide');
  circles[currentSlideIndex].classList.add("filled");
}

prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);

showSlides();

setInterval(nextSlide, 7000);

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    const thisCircle = e.target;
    const newSlideIndex = [...circles].indexOf(thisCircle);
    if (newSlideIndex < currentSlideIndex) {
      currentSlideIndex = newSlideIndex;
      showSlides();
      slides[newSlideIndex].classList.add('slide-backward');
      return;
    };
    currentSlideIndex = newSlideIndex;
    showSlides();
  });
});
