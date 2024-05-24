/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-source';
import LikeButtonInitiator from '../../src/scripts/utils/favorite-idb';

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};
export { createLikeButtonInitiatorWithRestaurant };
