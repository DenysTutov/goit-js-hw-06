function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls > input"),
  createBtn: document.querySelector("#controls > button[data-create]"),
  destroyBtn: document.querySelector("#controls > button[data-destroy]"),
  boxesMarkup: document.querySelector("#boxes"),
};

const { input, createBtn, destroyBtn, boxesMarkup } = refs;

function createBoxes(amount) {
  let countWidth = 30;
  let countHeight = 30;
  let markupArray = [];

  // amount = Number(input.value);

  if (amount < Number(input.min) || amount > Number(input.max)) {
    alert(`Введите число от ${input.min} до ${input.max}`);
    input.value = "";
    return;
  }

  for (let i = Number(input.min); i <= amount; i += Number(input.step)) {
    const divRef = `<div style="width: ${countWidth}px; height: ${countHeight}px; background-color: ${getRandomHexColor()};"></div>`;

    markupArray.push(divRef);

    countWidth += 10;
    countHeight += 10;
  }
  boxesMarkup.insertAdjacentHTML("beforeend", markupArray.join(""));
}

function destroyBoxes() {
  boxesMarkup.innerHTML = "";
  input.value = "";
}

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);
