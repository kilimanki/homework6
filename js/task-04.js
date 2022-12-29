const decrementBtn = document.querySelector("#minus");
const incrementBtn = document.querySelector("#plus");
const valueCounter = document.querySelector("#value");
let counterValue = 0;
const minusClick = () => {
  counterValue -= 1;
  console.log(counterValue);
  valueCounter.innerHTML = counterValue;
};
decrementBtn.addEventListener("click", minusClick);
const plusClick = () => {
  counterValue += 1;
  console.log(counterValue);
  valueCounter.innerHTML = counterValue;
};
incrementBtn.addEventListener("click", plusClick);
