const btnColor = document.querySelector(".change-color");
const valueSpan = document.querySelector(".color");

btnColor.addEventListener("click", (e) => {
  e.preventDefault();
  bodyColor(getRandomHexColor());
  spanValue(getRandomHexColor());
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function bodyColor(color) {
  document.body.style.backgroundColor = color;
}
function spanValue(value) {
  valueSpan.textContent = value;
}
