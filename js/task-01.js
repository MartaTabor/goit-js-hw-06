const categories = document.querySelector("#categories");

const catCount = categories.querySelectorAll("li.item").length;
console.log(`Number of categories: ${catCount}`);

const itemsList = categories.querySelectorAll("li.item");

itemsList.forEach((item) => {
  const catName = item.querySelector("h2").textContent;
  const catItemCount = item.querySelectorAll("ul > li").length;
  console.log(`Category: ${catName}
   Elements: ${catItemCount}`);
});
