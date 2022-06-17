import { createElem } from "./createElem.js";

export const createCardPhoto = (data) => {

  const card = createElem('li', {
    className: 'card',
    id: data?.id,
  });

  const cardItem = createElem('a', {
    className: 'grid-item',
    href: `page.html?photo=${data?.id}`
  });

  const photo = new Image(200);
  photo.src = data?.urls.small;
  photo.alt = data?.alt_description;
  photo.alt = data?.description;

  const cardAuthor = createElem('a', {
    className: 'card__author',
    href: data?.user?.links?.html ?? '#'
  });

  const authorAvatar = new Image(32, 32);
  authorAvatar.className="author__photo";
  authorAvatar.src = data?.user?.profile_image?.medium ?? 'https://via.placeholder.com/32';
  authorAvatar.role="presentation";
  authorAvatar.alt=data?.user?.bio ?? "null";
  authorAvatar.title=data?.user?.name.replace(/^\w/, (ch) => ch.toUpperCase()) ?? ""; //string toCapitalize

  const cardPhotoLikeBtn = createElem('button', {
    className: "card__photo-like",
    textContent: data?.likes ?? '999'
  });
  
  const cardDownload = createElem('a', {
    className: "card__download",
    href: data.links.download,
    download: true,
    target: '_blank',
  });

  cardItem.append(photo);
  cardAuthor.append(authorAvatar);
  card.append(cardItem, cardAuthor, cardPhotoLikeBtn, cardDownload);
  
  return card; //возвращаем готовую карточку li
};
