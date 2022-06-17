'use strict';

import { createCardPhoto } from './createCardPhoto.js';


export const renderGallery = (photos) => {

  const grid = document.querySelector ('.grid');

  // grid.append( ...photos.map(createCardPhoto) );

  const cards = photos.map( createCardPhoto );
  grid.append(...cards);
  
  // return cards;
};
