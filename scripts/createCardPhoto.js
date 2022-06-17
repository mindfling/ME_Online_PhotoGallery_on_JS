import { createElem } from "./createElem.js";

export const createCardPhoto = (data) => {
  console.log('data: ', data);

  // const card = document.createElement ('li');
  const card = createElem('li', {
    className: 'card',
    id: data?.id,
  });
  console.log('card: ', card);

  // const cardItem = document.createElement ('a');
  const cardItem = createElem('a', {
    className: 'grid-item',
    href: `page.html?photo=${data?.id}`
  });
  console.log('cardItem: ', cardItem);

  const photo = new Image(200);
  photo.src = data?.urls.small;
  photo.alt = data?.alt_description;
  photo.alt = data?.description;
  console.log('photo: ', photo);

  // const cardAuthor = document.createElement('a');
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

  // const cardPhotoLikeBtn = document.createElement('button');
  const cardPhotoLikeBtn = createElem('button', {
    className: "card__photo-like",
    textContent: data?.likes ?? '999'
  });
  
  // const cardDownload = document.createElement('a');
  const cardDownload = createElem('a', {
    className: "card__download",
    href: data.links.download,
    download: true,
    target: '_blank',
  });
  

  cardItem.append(photo);
  cardAuthor.append(authorAvatar);
  card.append(cardItem, cardAuthor, cardPhotoLikeBtn, cardDownload);
  return card;

/*  
  return `
    <li class="card" style="min-height: 300px;">
      <a id="BZnPqlIl5pk" class="grid-item" href="page.html?photo=BZnPqlIl5pk">

        <img width="200" src="https://images.unsplash.com/photo-1546372934-52ab68952775?ixlib=rb-1.2.1&w=200&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="null">

        <a class="card__author" href="#">
          <img class="author__photo" src="https://images.unsplash.com/profile-1639410901867-5932bcc818ccimage?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=32&amp;h=32" width="32" height="32" role="presentation" alt="I mainly do editorial shoots, but always with human elements. I believe that adding a human element to an art concept is the most organic way to represent our touch in the world." title="Chandri Anggara">
        </a>
        <button class="card__photo-like">2</button>
        <a class="card__download" href="https://unsplash.com/photos/BZnPqlIl5pk/download?ixid=MnwzMDE0MzF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDUyMzcxMA" download="" target="_blank"></a>
      </a>
    </li>
  `;
*/
};
