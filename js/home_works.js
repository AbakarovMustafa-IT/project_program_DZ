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

// move Bkock
// const childBlock = document.querySelector(".child_block");
// let positionX = 0;
// let positionY = 0;
// let positionZ = 0;
// let positionK = 0;
// let direction = "right"; // Начнем с движения вправо

// const move = () => {
//   if (direction === "right" && positionX < 448) {
//     positionX++;
//     childBlock.style.left = `${positionX}px`;
//   } else if (direction === "right" && positionX >= 448) {
//     direction = "down";
//   } else if (direction === "down" && positionY < 448) {
//     positionY++;
//     childBlock.style.top = `${positionY}px`;
//   } else if (direction === "down" && positionY >= 448) {
//     direction = "left";
//   } else if (direction === "left" && positionZ < 448) {
//     positionZ++;
//     childBlock.style.left = `${448 - positionZ}px`; // Двигаем влево, вычитая из 448 текущую позицию
//   } else if (direction === "left" && positionZ >= 448) {
//     direction = "up";
//   } else if (direction === "up" && positionK < 448) {
//     positionK++;
//     childBlock.style.top = `${448 - positionK}px`; // Двигаем вверх, вычитая из 448 текущую позицию
//   } else if (direction === "up" && positionK >= 448) {
//     direction = "right";
//     positionX = 0;
//     positionY = 0;
//     positionZ = 0;
//     positionK = 0;
//   }

//   setTimeout(move, 1);
// };

// move();

const childBlock = document.querySelector(".child_block");
let X = 0;
let Y = 0;
let direction = "right";

const move = () => {
  if (direction === "right" && X < 448) {
    X++;
    childBlock.style.left = `${X}px`;
    return setTimeout(move, 1);
  }
  if (direction === "right" && X >= 448) {
    direction = "down";
    return setTimeout(move, 1);
  }
  if (direction === "down" && Y < 448) {
    Y++;
    childBlock.style.top = `${Y}px`;
    return setTimeout(move, 1);
  }
  if (direction === "down" && Y >= 448) {
    direction = "left";
    return setTimeout(move, 1);
  }
  if (direction === "left" && X > 0) {
    X--;
    childBlock.style.left = `${X}px`;
    return setTimeout(move, 1);
  }
  if (direction === "left" && X <= 0) {
    direction = "up";
    return setTimeout(move, 1);
  }
  if (direction === "up" && Y > 0) {
    Y--;
    childBlock.style.top = `${Y}px`;
    return setTimeout(move, 1);
  }
  if (direction === "up" && Y <= 0) {
    direction = "right";
    return setTimeout(move, 1);
  }
};

move();

// timer
let counterValue = 0; // Изначальное значение счетчика
let intervalId = null; // Идентификатор интервала для увеличения счетчика

const counterElement = document.getElementById("secondsS");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function incrementCounter() {
  counterValue++;
  counterElement.textContent = counterValue;
}

startButton.addEventListener("click", function () {
  if (!intervalId) {
    // Если интервал не запущен
    intervalId = setInterval(incrementCounter, 1000); // Запускаем интервал с увеличением счетчика каждую секунду
  }
});

stopButton.addEventListener("click", function () {
  if (intervalId) {
    // Если интервал запущен
    clearInterval(intervalId); // Останавливаем интервал
    intervalId = null; // Сбрасываем идентификатор интервала
  }
});

resetButton.addEventListener("click", function () {
  counterValue = 0; // Обнуляем счетчик
  counterElement.textContent = counterValue;
  if (intervalId) {
    // Если интервал запущен, останавливаем его
    clearInterval(intervalId);
    intervalId = null;
  }
});
