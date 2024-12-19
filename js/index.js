"use strict";

// Выпадающее меню навигации по сайту в мобильной версии
const dropdownBtn = document.getElementById("dropdown_button");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("dropdown__arrowIcon");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Переключатель. Когда кликаем на кнопку, меню открывается/закрывается
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Закрываем меню при плике на какой-либо элемент DOM
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

// Модальное окно подтверждения, что ссылка на телеграм скопирована (в футере)
const telegramLink = "https://t.me/M_e_t_a_l_H_e_a_d";
const dialogSuccessCopyTelegramLink = document.getElementById(
  "dialogSuccessCopyTelegramLink"
);
const buttonCopyTelegramLink = document.getElementsByClassName(
  "buttonCopyTelegramLink"
)[0];

buttonCopyTelegramLink.addEventListener("click", () => {
  dialogSuccessCopyTelegramLink.showModal();
  navigator.clipboard.writeText(telegramLink);
});
