import "./styles.css";

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev>button");
const nextBtn = document.querySelector(".next>button");
const circles = document.querySelectorAll(".circle");

let slideIndex = 0;

function moveToNextSlideBtn() {
  if (slideIndex === 9) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }
  showSlides();
}

function moveToPreviousSlide() {
  if (slideIndex === 0) {
    slideIndex = 9;
  } else {
    slideIndex -= 1;
  }
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

prevBtn.addEventListener("click", moveToPreviousSlide);
nextBtn.addEventListener("click", moveToNextSlideBtn);

showSlides();

setInterval(moveToNextSlideBtn, 5000);

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    const thisCircle = e.target;
    const thisCircleIndex = [...circles].indexOf(thisCircle);
    slideIndex = thisCircleIndex;
    showSlides();
  });
});
