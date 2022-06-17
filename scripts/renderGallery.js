'use strict';

import { createCardPhoto } from './createCardPhoto.js';


export const renderGallery = (photos) => {

  const grid = document.querySelector ('.grid');

  grid.append( ...photos.map(createCardPhoto) );

  // const cards = photos.map( photo => {
  //   return createCardPhoto(photo);
  // })

  // const cards = photos.map( createCardPhoto );
  // grid.append(...cards);
  
  return cards;
};


/*
const createElem = (tags, attrs = {}) => {
  console.log('tags: ', tags);
  console.log('attrs: ', attrs);

  const elem = document.createElement(tags);
  if (attrs.className) {
    elem.className = attrs.className;
  }
  if (attrs.value) {
    elem.innerHTML = attrs.value;
  }
  return elem;
}
*/
