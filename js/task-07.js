const inputField = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
inputField.addEventListener("input", (e) => {
  spanText.style.fontSize = inputField.value + "px";
});
