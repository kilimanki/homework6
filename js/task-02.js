const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
for (const elem of ingredients) {
  let result = document.createElement("li");
  result.textContent = elem;
  result.classList.add("item");
  document.querySelector("#ingredients").append(result);
  console.log(result);
}
