const toggle = document.getElementById("payment");
const body = document.querySelector("body");
const slider = document.querySelector(".slider__");
const switchBTN = document.querySelector(".switch .slider");
const isOnDiscount = document.getElementById("payment");
const discount = 0.25;

const inputRange = document.querySelector(".input-range");
const sliderBtn = document.querySelector(".img-slider-div");
let currentStep;

const steps = [
  { pageviews: 10000, pageviewsLabel: "10K", price: 8 },
  { pageviews: 50000, pageviewsLabel: "50K", price: 12 },
  { pageviews: 100000, pageviewsLabel: "100K", price: 16 },
  { pageviews: 500000, pageviewsLabel: "500k", price: 24 },
  { pageviews: 1000000, pageviewsLabel: "1M", price: 36 },
];

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
  const step = Math.round(percent * (steps.length - 1));
  if (currentStep !== step) {
    currentStep = step;
  }
  updatePrice(step);
  sliderBtn.style.left = `${thumbPosition}px`;
}

function fixedStep() {
  console.log("fixedStep");

  const percent =
    (inputRange.value - inputRange.min) / (inputRange.max - inputRange.min);

  const step = Math.round(percent * (steps.length - 1));
  const fixedPercentage = step / (steps.length - 1);

  const thumbPosition = fixedPercentage * inputRange.offsetWidth;
  sliderBtn.style.left = `${thumbPosition}px`;

  updatePrice(step);
}

function updatePrice(step) {
  const { pageviewsLabel, price } = steps[step];

  // aplicar descuento si corresponde
  if (isOnDiscount.checked) {
    priceLabel = price * (1 - discount);
  } else {
    priceLabel = price;
  }

  document.querySelector(".views").textContent = `${pageviewsLabel} Pageviews`;
  document.querySelector(".price").textContent = `$${priceLabel.toFixed(2)}`;
  document.querySelector(
    ".views.mobile"
  ).textContent = `${pageviewsLabel} Pageviews`;
  document.querySelector(
    ".month.mobile .price"
  ).textContent = `$${priceLabel.toFixed(2)}`;
}

inputRange.addEventListener("input", updateThumb);
inputRange.addEventListener("mouseup", fixedStep);
inputRange.addEventListener("change", fixedStep);
isOnDiscount.addEventListener("change", fixedStep);

window.addEventListener("load", updateThumb);
