document.querySelector("#scheduleForm").addEventListener("submit", function(e){
    e.preventDefault();
    this.reset();
    const snackbar = document.querySelector("#snackbar")
    snackbar.classList.add("show");
    setTimeout(function(){ snackbar.classList.remove("show"); }, 2900);
});