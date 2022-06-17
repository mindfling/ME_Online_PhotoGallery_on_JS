export const createElem = (tags, attrs = {}) => {

  const elem = document.createElement(tags);
  Object.assign(elem, attrs); //копируем все аттрибуты элемента из attrs в elem

  return elem;
}
