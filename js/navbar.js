let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nvbr");

menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
});


// закрытие navr при нажатии на btn-login
const btnLogin = document.querySelector(".btn-login");
const nvbr = document.querySelector(".nvbr");
const loginContainer = document.querySelector(".login");

btnLogin.addEventListener("click", () => {
  nvbr.classList.remove("active");
  loginContainer.classList.add("show");
  menu.classList.toggle("bx-x");
});
