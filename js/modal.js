// MODAL

const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal_close");
const modalTrigger = document.querySelector("#btn-get");

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

modalTrigger.onclick = () => openModal();
closeModalButton.onclick = () => closeModal();
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

let modalTimer;
function checkScrollAndShowModal() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;

  // Проверяем, достиг ли пользователь конца страницы
  if (scrollPosition + windowHeight >= documentHeight) {
    openModal(); // Вызываем модальное окно

    // Удаляем обработчик события после первого вызова
    window.removeEventListener("scroll", checkScrollAndShowModal);
    clearTimeout(modalTimer);
  }
}

window.addEventListener("scroll", checkScrollAndShowModal);
window.onload = () => (modalTimer = setTimeout(openModal, 10000));
