export const getData = (url = 'data.json') => {

  return fetch(url)
    .then( (data) => data.json() );
};
