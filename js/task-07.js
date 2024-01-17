const slider = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

slider.addEventListener("input", (event) => {
  const inputSlide = event.currentTarget.value;
  spanText.style.fontSize = Number(inputSlide) + "px";
});
