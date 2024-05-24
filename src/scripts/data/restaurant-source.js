/* eslint-disable no-undef */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async Resto() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailMenu(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default RestaurantSource;
