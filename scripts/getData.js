export const getData = (url = 'data.json') => {
  // * запрос на сервер и загружаем навые json данные 
  // возвращаем Промис
  return fetch(url)
    .then( (data) => data.json() );
};
