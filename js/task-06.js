const inputBlur = document.querySelector("#validation-input");

inputBlur.addEventListener("blur", () => {
  const inputValue = inputBlur.value.length;
  const validLength = Number(inputBlur.getAttribute("data-length"));

  if (inputValue === validLength) {
    inputBlur.classList.add("valid");
    inputBlur.classList.remove("invalid");
  } else if (inputValue !== validLength) {
    inputBlur.classList.add("invalid");
    inputBlur.classList.remove("valid");
  }
});
