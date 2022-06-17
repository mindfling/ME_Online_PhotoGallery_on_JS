'use strict';


export const getData = (url = 'data.json') => {
  return fetch(url).then((data) => {
      return data.json();
    })
};


/*
// path need to be from ./index.html
export const getData = () => {
  const result = fetch('data.json')
    .then( response => response.json() )
  return result;
}
*/