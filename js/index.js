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
