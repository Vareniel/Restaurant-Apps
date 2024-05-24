/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import renderDetailPage from './refresh';

const AddReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');

  const data = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReview.value,
  };

  await RestaurantSource.addReview(data);
  inputReviewName.value = '';
  inputReview.value = '';
  renderDetailPage();
};

export default AddReview;
