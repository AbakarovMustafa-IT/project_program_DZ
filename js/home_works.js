// PHONE VALIDATOR

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

// phoneButton.addEventListener('click', () => {

// });

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "NOT OK";
    gmailResult.style.color = "red";
  }
};

const childBlock = document.querySelector(".child_block");
let leftValue = 0; // Исходное значение left
const targetPosition = 445; // Целевая позиция, до которой блок должен двигаться

const moveRight = () => {
  leftValue += 2; // Увеличиваем значение left
  childBlock.style.left = `${leftValue}px`;

  if (leftValue < targetPosition) {
    requestAnimationFrame(moveRight); // Запускаем анимацию повторно
  } else {
    // Достигли целевой позиции, останавливаем анимацию
    cancelAnimationFrame(moveRight);
  }
};

moveRight();
