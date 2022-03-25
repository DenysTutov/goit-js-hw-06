const refs = {
  inputRange: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.text.style.fontSize = `${refs.inputRange.value}px`;

refs.inputRange.addEventListener("input", (eventRange) => {
  refs.text.style.fontSize = `${eventRange.currentTarget.value}px`;
});
