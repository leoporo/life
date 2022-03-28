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
  document.body.scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector("#menu").addEventListener("click", function(){
  document.querySelector(".navbar-responsive").classList.add("active");
});

document.querySelector("#closemenu").addEventListener("click", function(){
  document.querySelector(".navbar-responsive").classList.remove("active");
});

const menuItems = document.querySelectorAll(".navbar-responsive ul li a");

 for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
    document.querySelector(".navbar-responsive").classList.remove("active");
     });
 }

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});