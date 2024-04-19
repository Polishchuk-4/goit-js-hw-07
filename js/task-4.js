const inputEmail = document.querySelector('input[type="email"]');
const loginForm = document.querySelector(".login-form");

inputEmail.addEventListener("focus", () => {
  inputEmail.placeholder = "Type area";
});
inputEmail.addEventListener("blur", () => {
  inputEmail.placeholder = "";
});
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const user = {
    email: email,
    password: password,
  };
  console.log(user);
  form.reset();
});
