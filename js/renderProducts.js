const url = "../products.json";

$.ajax({
  url: url,
  type: "GET",
  dataType: "json",
  success: function (products) {
    // находим контейнер для списка продуктов
    const productList = document.getElementById("product-list");

    // проходимся по всем продуктам и создаем для каждого HTML элемент
    products.forEach((product) => {
      // создаем карточку продукта
      const card = document.createElement("div");
      card.classList.add("col-md-6");

      // добавляем данные продукта
      card.innerHTML = `
          <div class="card mb-4 cont-menu" data-id="${product.id}">
            <img class="product-img" src="/images/${product.img}" alt="" />
            <div class="card-body text-center">
              <h4 class="item-title">${product.name}</h4>
              <p><small data-items-in-box class="text-muted">${product.description}</small></p>
              <div class="details-wrapper">
                <div class="items counter-wrapper">
                  <div class="items__control" data-action="minus">-</div>
                  <div class="items__current" data-counter>1</div>
                  <div class="items__control" data-action="plus">+</div>
                </div>
                <div class="price">
                  <div class="price__weight">${product.weight} g.</div>
                  <div class="price__currency">${product.price} $</div>
                </div>
              </div>
              <button data-cart type="button" class="btn btn-block btn-outline-warning">+ Add to cart</button>
            </div>
          </div>
        `;

      // добавляем карточку продукта в список продуктов
      productList.appendChild(card);
    });
  },
  error: function (error) {
    console.error("Ошибка получения данных из файла", error);
  },
});
