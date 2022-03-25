const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
};

let value = 0;

refs.decrementBtn.addEventListener("click", () => {
  makeDecrement();
  updateValueUI();
});

refs.incrementBtn.addEventListener("click", () => {
  makeIncrement();
  updateValueUI();
});

function makeDecrement() {
  value -= 1;
}

function makeIncrement() {
  value += 1;
}

function updateValueUI() {
  refs.counterValue.textContent = value;
}
