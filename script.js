const toggle = document.getElementById("payment");
const body = document.querySelector("body");
const slider = document.querySelector(".slider__");
const switchBTN = document.querySelector(".switch .slider");

const inputRange = document.querySelector(".input-range");
const sliderBtn = document.querySelector(".img-slider-div");

toggle.addEventListener("click", () => {
  body.dataset.active = toggle.checked ? "true" : "false";
});

switchBTN.addEventListener("mousedown", () => {
  switchBTN.style.cursor = "grabbing";
});
switchBTN.addEventListener("mouseup", () => {
  switchBTN.style.cursor = "grab";
});

function updateThumb() {
  const percent =
    (inputRange.value - inputRange.min) / (inputRange.max - inputRange.min);
  const thumbPosition = percent * inputRange.offsetWidth;
  sliderBtn.style.left = `${thumbPosition}px`;
}

inputRange.addEventListener("input", updateThumb);
window.addEventListener("load", updateThumb);
