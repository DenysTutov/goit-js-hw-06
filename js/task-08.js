const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("Все поля должны быть заполнены");
  }

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = { email, password };
  console.log(formData);

  event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);
