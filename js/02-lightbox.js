import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const listItemMarkup = createListItemMarkup(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', listItemMarkup);
var lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,

})

function createListItemMarkup(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
          <img
              class="gallery__image"
              src="${item.preview}"
              alt="${item.description}"
          />
      </a>
      </li>`,
    )
    .join('');
}
