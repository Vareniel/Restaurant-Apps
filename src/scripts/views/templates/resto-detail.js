/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
import CONFIG from '../../globals/config';

class RestoDetail extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const resto = JSON.parse(this.getAttribute('data-resto'));
    this.render(resto);
  }

  render(resto) {
    this.innerHTML = `
      <div class="restaurant-info">
        <div class="restaurant-image-container">
          <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
        </div>
        <h2>${resto.name}</h2>
        <p>${resto.description}</p>
        <p><strong>Kota:</strong> ${resto.city}</p>
        <p><strong>Alamat:</strong> ${resto.address}</p>
        <p class="categories"><strong>Kategori:</strong> ${resto.categories.map((category) => category.name).join(', ')}</p>
      </div>
      <div class="menu-list">
        <h3>Menu</h3>
        <ul>
          <li><strong>Makanan:</strong> ${resto.menus.foods.map((food) => food.name).join(', ')}</li>
          <li><strong>Minuman:</strong> ${resto.menus.drinks.map((drink) => drink.name).join(', ')}</li>
        </ul>
      </div>
      <div class="customer-reviews">
        <h3>Apa Kata Pembeli?</h3>
        <ul>
          ${resto.customerReviews
    .map(
      (review) => `<li><strong>${review.name} (${resto.rating}):</strong> <div class="riviu">${review.review}</div> (${review.date})</li><br>`,
    )
    .join('')}
        </ul>
      </div>
    `;
  }
}

customElements.define('resto-detail', RestoDetail);
