function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document
  .querySelector("button[data-create]")
  .addEventListener("click", createBoxes);
document
  .querySelector("button[data-destroy]")
  .addEventListener("click", destroyBoxes);

const inputField = document.querySelector("input");
const boxesField = document.querySelector("#boxes");

function createBoxes(amount) {
  const inputValue = inputField.value;

  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesField.append(box);
  }
}

function destroyBoxes() {
  boxesField.innerHTML = "";
  inputField.value = "";
}
