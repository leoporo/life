document.querySelector("#appointmentForm").addEventListener("submit", function(e){
    e.preventDefault();
    this.reset();
    document.querySelector("#appointmentForm select").style.color = "rgb(117, 117, 117)";
    const snackbar = document.querySelector("#snackbar")
    snackbar.classList.add("show");
    setTimeout(function(){ snackbar.classList.remove("show"); }, 2900);
});

document.querySelector("#appointmentForm select").addEventListener("change", function(){
    document.querySelector("#appointmentForm select").style.color = "#006d77";
});