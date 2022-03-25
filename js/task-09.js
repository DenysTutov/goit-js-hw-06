function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

console.log(refs.body);

refs.changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
});
