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

const topBtn = document.querySelector("#topBtn  ");
window.onscroll = () => showTopBtn();

const showTopBtn = () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function(){
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  document.body.scrollIntoView({
    behavior: "smooth"
  });
});