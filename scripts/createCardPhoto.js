'use strict';

export const createCardPhoto = (data) => {

  const card = document.createElement ('li');
  card.className = 'card';
  // ? card.style.minHeight = '300px';


  const cardItem = document.createElement ('a');
  cardItem.className = 'grid-item';
  cardItem.id = data?.id;
  cardItem.href = `page.html?photo=${data?.id}`;

  const photo = new Image();
  photo.width = '200';
  photo.src = data?.urls.small;
  photo.alt = data?.alt_description;
  photo.alt = data?.description;
  

  const cardAuthor = document.createElement('a');
  cardAuthor.className="card__author";
  cardAuthor.href = data?.user?.links?.html ?? '#';

  const authorAvatar = new Image(32, 32);
  authorAvatar.className="author__photo";
  authorAvatar.src = data?.user?.profile_image?.medium ?? 'https://via.placeholder.com/32';
  // authorAvatar.width="32" 
  // authorAvatar.height="32" 
  authorAvatar.role="presentation";
  authorAvatar.alt=data?.user?.bio ?? "null";
  authorAvatar.title=data?.user?.name.replace(/^\w/, (ch) => ch.toUpperCase()) ?? "";


  const cardPhotoLikeBtn = document.createElement('button');
  cardPhotoLikeBtn.className="card__photo-like";
  cardPhotoLikeBtn.textContent = data?.likes ?? '999';

  
  const cardDownload = document.createElement('a');
  cardDownload.className="card__download";
  cardDownload.href = data.links.download;
  cardDownload.download = true;
  cardDownload.target = '_blank';
  

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

/*
console.log(createElem('ul'));
const li = createElem('li', {
  className: 'list-item',
  value: 'test value'
});

document.querySelector('.main').append(li);
*/

};
