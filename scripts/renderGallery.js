import { createCardPhoto } from './createCardPhoto.js';
import { createElem } from './createElem.js';

export const renderGallery = (photos) => {

  const galleryWrapper = document.querySelector('.gallery__wrapper');

  const grid = createElem('ul', {
    className: 'grida',
    style: "display: flex; flex-wrap: wrap; align-items: flex-start; gap: 30px;"
  })

  // const grid = document.querySelector ('.grid');
  const cards = photos.map( createCardPhoto );
  
  grid.append(...cards); // добавляем карточки в li
  galleryWrapper.appendChild(grid);
};
