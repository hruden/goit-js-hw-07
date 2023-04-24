import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const listItemMarkup = createListItemMarkup(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', listItemMarkup);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
  //блокуємо оновлення сторінки
  e.preventDefault();
  // робимо перевірку, що натискаємо IMG
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const original = e.target.dataset.source;
  // створюємо basicLightbox
  const instance = basicLightbox.create(
    `<img src="${original}" width="800" height="600">`,
  );
  //запускаємо его
  instance.show();
  //додаємо закривання через 'Escape'
  galleryEl.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}
//створюємо розмітку
function createListItemMarkup(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
            class="gallery__image"
            data-source="${item.original}"
            src="${item.preview}"
            alt="${item.description}"
        />
    </a>
    </li>`,
    )
    .join('');
}
