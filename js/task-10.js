function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesS = document.querySelector("#boxes");
const createSquares = document.querySelector("[data-create]");
const deleteSquaers = document.querySelector("[data-destroy]");

deleteSquaers.addEventListener("click", destroyBoxes);
createSquares.addEventListener("click", createBoxes);
function destroyBoxes() {
  while (boxesS.hasChildNodes()) {
    boxesS.removeChild(boxesS.firstChild);
  }
}
function createBoxes() {
  destroyBoxes();
  const inputField = document.querySelectorAll("input");
  let amount = inputField[0].value;
  let blockSize = 30;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.setAttribute(
      "style",
      `width:${blockSize}px; height:${blockSize}px; background-color: ${getRandomHexColor()};`
    );
    boxesS.insertAdjacentElement("beforeend", square);
    blockSize += 10;
  }
}
