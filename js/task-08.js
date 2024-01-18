const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const regForm = event.target;
  const email = regForm.elements.email.value;
  const password = regForm.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  } else {
    const formObj = {
      email: email,
      password: password,
    };
    console.log(formObj);
    form.reset();
  }
});
