const cardsUser = document.querySelector(".cards");

async function showCards() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    cardsUser.innerHTML = `
      <div class="cards">
        <div class"card">
          <img src="../images/User.jpg">
          <h2>${data?.title}</h2>
          <p>${data?.body}</p>
        </div>
      </div>
    `;
  } catch (error) {}
}

showCards();
