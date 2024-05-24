/* eslint-disable no-undef */
import RestaurantSource from '../../data/restaurant-source';
import { createResto } from '../templates/create-template';

const Home = {
  async render() {
    return `
    <div class="resto__title" id="resto__title">
      <h2 tabindex="0">Temukan Restoran Kesukaanmu!</h2>
    </div>
    <div id="restos" class="restos"></div>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.Resto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createResto(resto);
    });
  },
};

export default Home;
