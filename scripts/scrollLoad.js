import { createCardPhoto } from "./createCardPhoto.js";
import { getData } from "./getData.js";

export const scrollLoad = (gallery, grid, endElem) => {

  const observer = new IntersectionObserver (
    async entries => {
      // * когда endElem пересекается
      //* подгружаем новые фоты ОПЯТЬ
      if (entries[0].isIntersecting) {

        console.log ('я вижу вижу');

        const photos = await getData(); // опять подгружаем информацию о всех фотах
        // const cards = photos.map((photo) => {
        //   return createCardPhoto(photo); // опять формируем массив элем фото
        // })
        const cards = photos.map( createCardPhoto );
        // дожидаемся когда все промисы завершатся
        Promise.all(cards)
          .then (cards => {
            gallery.append (...cards); // добавляем карточки li в галерею ul
            grid.appended (cards); // добавлено в обкт Masonry

          });
      }
    },
    { rootMargin: '150px' }
  );

  // * наблюдаем за пересечением с endElem
  observer.observe (endElem);
};
