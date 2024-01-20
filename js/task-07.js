const slider = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = slider.value + "px";

slider.addEventListener("input", (event) => {
  const inputSlide = event.currentTarget.value;
  spanText.style.fontSize = Number(inputSlide) + "px";
});
