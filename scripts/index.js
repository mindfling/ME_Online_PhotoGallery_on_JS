import { getData } from './getData.js';
import { renderGallery } from './renderGallery.js'

console.log('hello gallery');


const init = async (selectorWrapper) => {
  // точка монтирования галереи
  const wrapper = document.querySelector(selectorWrapper);
  // делаем асинхронную функцию чтобы вывести все фоты
  // запрос на сервер получаем фоты
  const photos = await getData(); // дождется всех фоток
  // рендерим фоты в галерее
  renderGallery(wrapper, photos);
}


init('.gallery__wrapper');