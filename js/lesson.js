// PHONE VALIDATOR

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

// phoneButton.addEventListener('click', () => {

// });

const regExp = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
  }
};

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const parentTabs = document.querySelector(".tab_content_items");

let currentIndex = 0;

const hideTabContent = () => {
  tabContentBlocks.forEach((tabContentBlock) => {
    tabContentBlock.style.display = "none";
  });
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (indexElement = 0) => {
  tabContentBlocks[indexElement].style.display = "block";
  tabItems[indexElement].classList.add("tab_content_item_active");
};

hideTabContent();
showTabContent();

function autoSlide() {
  hideTabContent();
  currentIndex = (currentIndex + 1) % tabContentBlocks.length;
  showTabContent(currentIndex);
}

const slideInterval = setInterval(autoSlide, 3000);

parentTabs.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((tabItem, tabIndex) => {
      if (event.target === tabItem) {
        clearInterval(slideInterval);
        hideTabContent();
        currentIndex = tabIndex;
        showTabContent(tabIndex);
        slideInterval = setInterval(autoSlide, 3000);
      }
    });
  }
};

// CONVERTER

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

// som.addEventListener("input", () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "../data/converter.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();
//   request.addEventListener("load", () => {
//     const response = JSON.parse(request.response);
//     usd.value = (som.value / response.usd).toFixed(2);
//   });
// });

// usd.addEventListener("input", () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "../data/converter.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();
//   request.addEventListener("load", () => {
//     const response = JSON.parse(request.response);
//     som.value = (usd.value * response.usd).toFixed(2);
//   });
// });

// DRY - don`t repeat yourself
// KISS - Keep it simple, stupid
// KISS - Keep it short and simple

const converter = (element, target, target2, currency) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const response = JSON.parse(request.response);
      if (currency === "som") {
        target.value = (element.value / response.usd).toFixed(2);
        target2.value = (element.value / response.eur).toFixed(2);
      } else if (currency === "usd") {
        target.value = (element.value * response.usd).toFixed(2);
        target2.value = (element.value * response.eur).toFixed(2);
      } else if (currency === "eur") {
        target.value = (element.value * response.eur).toFixed(2);
        target2.value = (element.value * response.usd).toFixed(2);
      }
      // element.value === "" ? (target.value = "") : false;
      element.value === "" && ((target.value = ""), (target2.value = ""));
    };
  };
};

converter(som, usd, eur, "som");
converter(usd, som, eur, "usd");
converter(eur, som, usd, "eur");
