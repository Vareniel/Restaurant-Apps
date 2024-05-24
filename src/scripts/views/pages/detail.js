/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import '../templates/resto-detail'; // Import custom element file
import LikeButtonInitiator from '../../utils/favorite-idb';
import FavoriteRestaurantIdb from '../../data/favorite-source';
import AddReview from '../../utils/review';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto">
        <div id="loadingIndicator" style="display: none; text-align: center;">
          <img class="loadingGIF" src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif" style="max-width: 200px;" alt="Loading..." />
        </div>
      </div>

      <div id="likeButtonContainer"></div>

      <div class="form-container">
        <h2>Tambah Komentar</h2>
        <form class="form" action="#" id="comment-form">
          <div class="form-group">
            <label for="name">Nama</label><br>
            <input type="text" id="inputName" name="name" class="words" maxlength="50" required>
          </div>           
          <div class="form-group">
            <label for="review">Komentar</label><br>
            <textarea name="review" id="inputReview" cols="30" rows="5" class="words" required></textarea>
          </div>
          <div class="form-group">
            <input type="submit" value="Kirim " class="btn-submit" id="comment-submit">
          </div>
        </form>
      </div>

    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#resto');
    const loadingIndicator = restoContainer.querySelector('#loadingIndicator');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    loadingIndicator.style.display = 'block';

    const resto = await RestaurantSource.detailMenu(url.id);
    const restoDetail = document.createElement('resto-detail');
    restoDetail.setAttribute('data-resto', JSON.stringify(resto));
    restoContainer.appendChild(restoDetail);

    loadingIndicator.style.display = 'none';
    const restoDetailElement = document.querySelector('resto-detail');

    const restoDataJson = restoDetailElement.getAttribute('data-resto');

    const restoData = JSON.parse(restoDataJson);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restoData.id,
        name: restoData.name,
        pictureId: restoData.pictureId,
        description: restoData.description,
        city: restoData.city,
        rating: restoData.rating,
      },
    });

    const submitReview = document.getElementById('comment-submit');
    submitReview.addEventListener('click', async (event) => {
      event.preventDefault();
      restoDetailElement.style.display = 'none';
      const loadingGIF = document.querySelector('.loadingGIF');
      loadingIndicator.style.display = 'block';
      loadingIndicator.style.position = 'fixed';
      loadingIndicator.style.top = '50%';
      loadingIndicator.style.left = '50%';
      loadingIndicator.style.transform = 'translate(-50%, -50%)';
      loadingGIF.style.maxWidth = '100vw';
      loadingGIF.style.width = '100vw';
      loadingGIF.style.maxHeight = '100vh';
      loadingGIF.style.height = '100vh';
      loadingGIF.style.backgroundColor = '#fff';
      setTimeout(async () => {
        await AddReview();
      }, 2000);
    });
  },
};

export default Detail;
