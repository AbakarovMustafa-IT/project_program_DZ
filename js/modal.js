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
modalTimer = setTimeout(openModal, 10000);

// POST DATA

const form = document.getElementsByClassName("form-modal");

const postData = async (formElement) => {
  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(formElement);
      const obj = {};

      formData.forEach((item, index) => (obj[index] = item));

      const response = await fetch("server.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error, "ERROR!!!");
    }
  });
};

postData(form);

// const form = document.querySelector("form");

// const postData = (formElement) => {
//   formElement.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const request = new XMLHttpRequest();
//     request.open("POST", "server.php");
//     request.setRequestHeader("Content-type", "application/json");

//     const formData = new FormData(formElement);
//     const obj = {};
//     formData.forEach((item, index) => (obj[index] = item));

//     request.send(JSON.stringify(obj));
//   });
// };

// postData(form);
