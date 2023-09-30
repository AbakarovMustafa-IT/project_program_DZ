const cardsUser = document.querySelector(".cards");

async function showCards() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Ограничиваем данные до 50 записей
    const limitedData = data.slice(0, 50);

    // Создаем HTML для карточек
    const cardHTML = limitedData
      .map(
        (item) => `
        <div class="inner_card_blog">
        <div class="card_photo">
          <img  class="card_photo_size" src="../images/User.jpg">
        </div>
          <h2 class="card_title">${item.title}</h2>
          <p class="card_descr">${item.body}</p>
        </div>
      `
      )
      .join(""); // Объединяем HTML в строку

    cardsUser.innerHTML = cardHTML;
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

showCards();
