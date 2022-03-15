import { users } from "./datasource.js";

if (sessionStorage.getItem("users") === null) {
  sessionStorage.setItem("users", JSON.stringify(users));
}

export let user = null;

export function removeQuotes(value) {
  return value.replace(/\"/g, "");
}

function addPanelLink() {
  const panelLink = document.createElement("a");
  panelLink.href = "/panel.html";
  panelLink.innerHTML = "Paneli";
  document.querySelector(".leftnav").appendChild(panelLink);
}

if (sessionStorage.getItem("loggedIn") === "true") {
  user = sessionStorage.getItem("currentUser");
  const logoutBtnContent = '<a href="" id="logout">Ckyqu</a>';
  document.querySelector("#auth").innerHTML =
    "<span>Mire se vjen, " +
    removeQuotes(JSON.stringify(JSON.parse(user).fullname)) +
    ".</span>" +
    logoutBtnContent;
  addPanelLink();
}

const logoutBtn = document.querySelector("#logout");

if (logoutBtn !== null) {
  logoutBtn.addEventListener("click", function () {
    sessionStorage.clear();
  });
}
