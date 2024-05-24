/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../../data/favorite-source';
import { createResto } from '../templates/create-template';

const Favorite = {
  async render() {
    return `
    <div class="resto__title" id="resto__title">
      <h2 class="a-resto" tabindex="0">Inilah Restoran Kesukaanmu!</h2>
    </div>
    <div id="restos" class="restos"></div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllRestaurants();
    const restosContainer = document.querySelector('#restos');
    const noRestoContainer = document.querySelector('#resto__title');
    if (restos.length === 0) {
      noRestoContainer.innerHTML = '<h2 class="no-resto" tabindex="0">Tidak ada Restoran untuk ditampilkan</h2>';
    } else {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createResto(resto);
      });
    }
  },
};

export default Favorite;
