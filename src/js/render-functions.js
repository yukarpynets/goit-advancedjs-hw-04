import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
            <div class="info">
              <p class="info-item">
                <span class="info-title">Likes</span>
                <span class="info-value">${image.likes}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Views</span>
                <span class="info-value">${image.views}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Comments</span>
                <span class="info-value">${image.comments}</span>
              </p>
              <p class="info-item">
                <span class="info-title">Downloads</span>
                <span class="info-value">${image.downloads}</span>
              </p>
            </div>
          </a>
        </li>
      `;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export const clearGallery = () => {
  galleryEl.innerHTML = '';
};

export const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};

export const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};

export const showLoadMoreButton = () => {
  loadMoreBtnEl.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  loadMoreBtnEl.classList.add('is-hidden');
};