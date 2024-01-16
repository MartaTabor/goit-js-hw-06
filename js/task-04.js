let counterValue = 0;

const counterField = document.querySelector("#value");

const incButton = document.querySelector('button[data-action="increment"]');

const incAction = () => {
  counterValue++;
  counterField.textContent = counterValue;
};

const decButton = document.querySelector('button[data-action="decrement"]');

const decAction = () => {
  counterValue--;
  counterField.textContent = counterValue;
};

incButton.addEventListener("click", incAction);
decButton.addEventListener("click", decAction);
