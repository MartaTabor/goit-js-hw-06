const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  list.append(listItem);
});
