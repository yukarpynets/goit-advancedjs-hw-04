import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.js-search-form');
const inputEl = document.querySelector('.js-search-input');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const query = inputEl.value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

        createGallery(data.hits);
        formEl.reset();
    })
    .catch(error => {
      hideLoader();

      console.log('ERROR:', error);

      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    });
});