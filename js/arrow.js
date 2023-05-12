const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
