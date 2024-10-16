const email = document.getElementById("huddle-mail");
const errorMessage = document.querySelector(".error");
const submitBtn = document.querySelector("submit-btn");
const form = document.querySelector(".newsletter-form");

const validateEmail = () => {
  const emailRegex = /^([a-z\d\,-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if (email.value === "") {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Email cannot be empty!";
    email.classList.add("error");
  } else {
    errorMessage.style.display = "";
    errorMessage.innerText = "";
    email.classList.remove("error");
  }

  if(email.value !== ""){
    if(!email.value.match(emailRegex)){
        errorMessage.style.display = "block";
        errorMessage.innerText = "Check your email please!";
        email.classList.add("error");
    }else{
        errorMessage.style.display = "";
        errorMessage.innerText = "";
        email.classList.remove("error");
    }
  }
};

email.addEventListener("keyup", (e) => {
  validateEmail();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});
