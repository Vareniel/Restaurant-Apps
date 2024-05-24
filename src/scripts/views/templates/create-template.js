/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import CONFIG from '../../globals/config';

const createResto = (resto) => `
    <div tabindex="0" class="card">
        <a href="/#/detail/${resto.id}" class="img_overlay">
            <img class="lazyload skeleton" tabindex="0" href="/#/detail/${resto.id}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="gambar dari ${resto.name}">
            <div class="overlay"></div>
        </a>
        <p class="code">ID: <b>${resto.id}</b></p>
        <h2 class="resto-name" tabindex="0"><a href="/#/detail/${resto.id}">${resto.name}</a></h2>
        <p class="desc_title">DESCRIPTION</p>
        <p tabindex="0" class="description">${resto.description}</p>
        <div class="info">
            <p tabindex="0" class="rating">${resto.rating} <i class="fa-solid fa-star"></i></p>
            <p tabindex="0" class="city">${resto.city}</p>
        </div>
    </div>
`;

const createLikeResto = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa-regular fa-star" aria-hidden="true"></i>
  </button>
`;

const createLikedResto = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa-solid fa-star" aria-hidden="true"></i>
  </button>
`;

// Code splitting for lazyload import
const loadLazyLoad = () => import('lazysizes').then((lazySizes) => lazySizes).catch((error) => {
  throw new Error(`Failed to load lazyload: ${error.message}`);
});

loadLazyLoad().then((lazySizes) => {
  // Use lazySizes or initialize lazysizes here if needed
}).catch((error) => {
  alert(error);
});

export { createResto, createLikeResto, createLikedResto };
