"use strict";
//          Swiper
let swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//responsive
// Получить объект, представляющий медиа-запрос
const mediaQuery = window.matchMedia("(max-width: 370px)");

// Обработчик события для медиа-запроса
const handleMediaQuery = (mq) => {
  const elementToShow = document.querySelector(".home-text-show");
  if (mq.matches) {
    // Медиа-запрос соответствует условию
    elementToShow.classList.add("hide");
  } else {
    // Медиа-запрос не соответствует условию
    elementToShow.classList.remove("hide");
  }
}

// Запустить обработчик события для текущего состояния медиа-запроса
handleMediaQuery(mediaQuery);

// Добавить слушатель событий на медиа-запрос
mediaQuery.addEventListener('change', handleMediaQuery);
