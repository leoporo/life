if (sessionStorage.getItem("loggedIn") === "true") {
  window.location.href = "/";
}

function register(newUser){
  let users = JSON.parse(sessionStorage.getItem("users"));
  users.push(newUser);
  sessionStorage.setItem("users", JSON.stringify(users));
}

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const passwordInput = document.querySelector("#password").value;
  const confirmPasswordInput = document.querySelector("#confirmPassword").value;

  if (passwordInput === confirmPasswordInput) {
    const newUser = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      gender: document.querySelector("#gender").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      role: "patient",
      diagnosis: "",
      profile_picture: "./images/profile_pictures/default.jpg"
    };

    register(newUser);

    window.location.href = "/login.html";
  } else {
    document.querySelector(".form-validation").style.display = "block";
  }
});
