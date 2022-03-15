import { user, removeQuotes } from "./app.js";

document.querySelectorAll(".panel").forEach(element => {
  element.style.display = "none";
});

if (sessionStorage.getItem("loggedIn") !== "true") {
  window.location.href = "/";
}

function showReceptionistPanel(){
  document.querySelector("#receptionistPanel").style.display = "flex";
}

function showDoctorPanel(){
  document.querySelector("#doctorPanel").style.display = "flex";
}

function showPatientPanel(){
  document.querySelector("#patientPanel").style.display = "flex";
}

const userRole = removeQuotes(JSON.stringify(JSON.parse(user).role));

switch (userRole) {
  case "receptionist":
    showReceptionistPanel();
    break;
  case "doctor":
    showDoctorPanel();
    break;
  case "patient":
    showPatientPanel();
    break;
  default:
    console.log("Rol i panjohur");
    window.location.href = "/";
    break;
}
