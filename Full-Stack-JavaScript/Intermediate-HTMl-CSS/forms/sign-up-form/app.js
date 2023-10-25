let password1 = document.querySelector("#user-password");
let password2 = document.querySelector("#user-password-confirm");
// Span to show on passwords not matching
let span = document.querySelector(".password-match");
// Form Submit Cancel
let form = document.querySelector("form");

password1.addEventListener("input", checkPassword);
password2.addEventListener("input", checkPassword);

// Password Match
let passMatch = false;
form.addEventListener("submit", (e) => {
  if (!passMatch) {
    e.preventDefault();
    console.log("test");
  }
});

function checkPassword() {
  let passwordValue = password1.value;
  let passwordConfirmValue = password2.value;

  if (passwordConfirmValue !== "" || passwordValue !== "") {
    if (passwordValue === passwordConfirmValue) {
      if (span.style.display === "block") {
        span.style.display = "none";
        password1.style.border = "2px green solid";
        password2.style.border = "2px green solid";
        return (passMatch = true);
      }
    } else if (passwordValue !== passwordConfirmValue) {
      span.style.display = "block";
      password1.style.border = "2px red solid";
      password2.style.border = "2px red solid";
      return (passMatch = false);
    }
  }
}
