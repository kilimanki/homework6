const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (event.target.value.trim() === "") {
    outputName.textContent = "Anonymous";
    return;
  }
  outputName.textContent = event.currentTarget.value;
});
