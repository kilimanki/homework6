console.log(
  "Number of categories:",
  document.querySelectorAll("#categories .item").length
);
const h2Title = document
  .querySelectorAll("#categories .item")
  .forEach((item) => {
    console.log(`Category:${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
