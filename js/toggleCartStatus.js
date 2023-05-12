function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmptyBadge = document.querySelector("[data-cart-empty]");
  const orderForm = document.querySelector("#order-form");

  if (cartWrapper.children.length > 0) {
    console.log("FULL");
    cartEmptyBadge.classList.add("none");
    orderForm.classList.remove("none");
  } else {
    console.log("EMPTY");
    cartEmptyBadge.classList.remove("none");
    orderForm.classList.add("none");
  }

  const phoneInput = orderForm.querySelector("input[type='text']");
  let errorShown = false;

  orderForm.addEventListener("submit", function (event) {
    const phonePattern = /^(\+38)?\s?0\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    const phoneValue = phoneInput.value;

    if (!phonePattern.test(phoneValue) && !errorShown) {
      event.preventDefault();
      alert("Введите корректный номер телефона в формате +38 xxx xxx xx xx");
      errorShown = true;
    }
  });
}
