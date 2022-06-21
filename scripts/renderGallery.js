import { createCardPhoto } from './createCardPhoto.js';
import { createElem } from './createElem.js';
import { scrollLoad } from './scrollLoad.js';

export const renderGallery = (wrapper, photos) => {
  // const galleryWrapper = document.querySelector('.gallery__wrapper');
  const gallery = createElem('ul', {
    className: 'grid',
    // style: "display:flex;flex-wrap:wrap;align-items:flex-start;gap:30px;"
  });
  
  const endElem = createElem('div', {
    className: 'empty',
    // style: 'width:100%;height:10px;background:#0c0;z-index:10;',
  });

  // wrapper.append(gallery); // внутрии .gallery__wrapper организуем нашу галерею
  // wrapper.append(endElem);
  wrapper.append(gallery, endElem);

  // создаем обкт управляющий сеткой Masonry
  const gridMsnry = new Masonry(gallery, {
    gutter: 10,
    itemSelector: '.card',
    columnWidth: 200,
    isFitWidth: true,
  });
    
  // const grid = document.querySelector ('.grid');
  // const cards = photos.map( createCardPhoto );
  // * асинхронная функция возвращает Промис
  const cards = photos.map( createCardPhoto );
  // const cards = photos.map( photo => createCardPhoto(photo) );
  
  // дожидаемся когда все промисы завершатся
  Promise.all(cards).then( (cards) => {
    
    gallery.append(...cards); // добавляем карточки li в галерею ul
    // gallery.append(...cards, endElem); // добавляем карточки li в галерею ul
    gridMsnry.appended(cards);     // добавлено в обкт Masonry
    // gallery.append(endElem);
    // gridMsnry.appended(endElem);

    scrollLoad( gallery, gridMsnry, endElem );
  });
};
