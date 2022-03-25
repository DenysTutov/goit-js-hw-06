const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameOutput.textContent = "Anonymous";
  }
}
