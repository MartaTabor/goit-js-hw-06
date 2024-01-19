function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const colorBody = document.querySelector("body");

colorButton.addEventListener("click", () => {
  colorBody.style.backgroundColor = getRandomHexColor();
  colorSpan.innerHTML = getRandomHexColor();
});
