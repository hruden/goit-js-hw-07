import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const listItemMarkup = createListItemMarkup(galleryItems);
galleryEl.innerHTML = listItemMarkup;
const instances = [];

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  const original = e.target
    .closest('.gallery__link')
    .getAttribute('data-source');

  const instance = basicLightbox.create(
    `<img src="${original}" width="800" height="600">`,
  );
  instances.push(instance); // Add instance to array
  instance.show();
  document.addEventListener('keydown', event => onEscPress(event, instance));
}
function createListItemMarkup(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}" data-source="${item.original}">
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
const onEscPress = (event, instance) => {
  const ESC_KEYCODE = 'Escape';
  if (event.code === ESC_KEYCODE) {
    instance.close();
    instances.splice(instances.indexOf(instance), 1);
    document.removeEventListener('keydown', event =>
      onEscPress(event, instance),
    );
  }
};
