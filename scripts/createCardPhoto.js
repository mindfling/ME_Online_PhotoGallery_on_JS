import { createElem } from "./createElem.js";


const loadImg = (url, description) => {

  // * возвращаем Промис - асикхронн фк
  return new Promise( (resolve, reject) => {
    const img = new Image(200, 200);
    img.src = url;
    img.alt = description;
    //img.style = 'border: 1px solid orange;';
    img.addEventListener('load', () => {
      // * если картинка загрузилась
      // console.log(`1 картинка ${url} загрузилась УСПЕШНО`);
      resolve(img);
    })
    img.addEventListener('error', (errDescrpt) => {
      // * если картинка не загрузилась
      console.log('картинка НЕ загрузилась ');
      reject(new Error(errDescrpt));
    })
  });
}


// async асинхронная функция сормирует карточку li
export const createCardPhoto = async (data) => {
  
  // * card вся карточка *
  const card = createElem('li', {
    className: 'card',
    id: data?.id,
    // style: 'border: 1px solid green;',
  });
  card.classList.add('grid-item');

  // ссылка на это фото
  const cardItem = createElem('a', {
    className: 'grid-item-link',
    href: `page.html?photo=${data?.id}`
  });

  // ********* только внутри этой ссылки
  //ждем пока не загрузится каждая фота
  const photo = await loadImg(data?.urls.small, data?.description);
  //ссылка на профиль автора внутири аватарка
  const cardAuthor = createElem('a', {
    className: 'card__author',
    href: data?.user?.links?.html ?? '#'
  });
  //аватарка автора внутри ссылки
  const authorAvatar = new Image(32, 32);
  authorAvatar.className="author__photo";
  authorAvatar.src = data?.user?.profile_image?.medium ?? 'https://via.placeholder.com/32';
  authorAvatar.role="presentation";
  authorAvatar.alt=data?.user?.bio ?? "null";
  authorAvatar.title=data?.user?.name.replace(/^\w/, (ch) => ch.toUpperCase()) ?? ""; //string toCapitalize

  //кнопка Likes в виде сердечка
  const cardPhotoLikeBtn = createElem('button', {
    className: "card__photo-like",
    textContent: data?.likes ?? '999'
  });
  
  //ссылка на загрузку
  const cardDownload = createElem('a', {
    className: "card__download",
    href: data.links.download,
    download: true,
    target: '_blank',
  });

  // * собираем элемы *
  cardItem.append(photo);
  cardAuthor.append(authorAvatar);
  card.append(cardItem, cardAuthor, cardPhotoLikeBtn, cardDownload);
  
  // * возвращаем готовую карточку li
  return card; 
};
