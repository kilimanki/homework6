const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Пожалуйста,заполните поля регистрации");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
});
