const inpputRef = document.querySelector("#validation-input");

inpputRef.addEventListener("blur", (e) => {
  const currentNumb = Number(e.currentTarget.dataset.length);
  console.log(e.currentTarget.value.length);
  if (currentNumb === e.currentTarget.value.length) {
    inpputRef.classList.add("valid");
    inpputRef.classList.remove("invalid");
  } else {
    inpputRef.classList.remove("valid");
    inpputRef.classList.add("invalid");
  }
});
