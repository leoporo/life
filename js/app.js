import { users } from "./datasource.js";

if (sessionStorage.getItem("users") === null) {
  sessionStorage.setItem("users", JSON.stringify(users));
}

export let user = null;

export function removeQuotes(value) {
  return value.replace(/\"/g, "");
}

function addPanelLink() {
  const newLi = document.createElement("li");
  const panelLink = document.createElement("a");
  panelLink.href = "/panel.html";
  panelLink.innerHTML = "Paneli";
  newLi.appendChild(panelLink);
  document.querySelector(".left-nav").children[0].insertAdjacentElement("afterend", newLi);
}

if (sessionStorage.getItem("loggedIn") === "true") {
  addPanelLink();
  document.querySelector("#loginBtn").style.display = "none";
  user = sessionStorage.getItem("currentUser");
  const newLi = document.createElement("li");
  const logoutBtnContent = document.createElement("a");
  logoutBtnContent.href = "#";
  logoutBtnContent.innerHTML = "Ckycu";
  logoutBtnContent.id = "logout";
  logoutBtnContent.style.alignSelf =  "flex-end";
  newLi.appendChild(logoutBtnContent);
  document.querySelector(".navbar-links").appendChild(newLi);
}

const logoutBtn = document.querySelector("#logout");

if (logoutBtn !== null) {
  logoutBtn.addEventListener("click", function () {
    sessionStorage.clear();
    window.location.href = "/";
  });
}

document.querySelector(".toggle-button").addEventListener("click", function(){
  document.querySelector(".navbar-links").classList.toggle("active");
});