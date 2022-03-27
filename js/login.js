import data from './db.js';

if (sessionStorage.getItem("loggedIn") === "true"){
  window.location.href = "/";
}

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const users = JSON.parse(sessionStorage.getItem("users"));
  console.log(users)
  const user = users.find((u) => u.email == email);

  if (user !== undefined) {
    if (user.password === password) {
      sessionStorage.clear();
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("currentUser", JSON.stringify({
        fullname: user.firstname + " " + user.lastname,
        email: user.email,
        role: user.role,
      } ));
      window.location.href = "/";
    }
  } else {
    document.querySelector(".form-validation").style.display = "block";
  }
});
