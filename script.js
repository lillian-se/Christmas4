let carousel = document.querySelector(".carousel");
let cellCount = 24;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = (selectedIndex / cellCount) * -360;
  carousel.style.transform = "translateZ(-718px) rotateY(" + angle + "deg)";
}

let prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
});

let nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
});
