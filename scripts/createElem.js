export const createElem = (tags, attrs = {}) => {
  console.log('tags: ', tags);

  const elem = document.createElement(tags);
  
  if (attrs.className) {
    elem.className = attrs.className;
  }
  
  console.log('tags id ', attrs.id);
  elem.id = attrs.id ? attrs.id : "";

  if (attrs.value) {
    elem.innerHTML = attrs.value;
  }

  return elem;
}