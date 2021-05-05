import { menu } from './view/templateMenu.js';
import { home } from './view/templateHome.js';
import { profile } from './view/templateProfile.js';

export const changeRoute = (hash) => {
  if(hash === '#/'){
    return showTemplate(hash)
  } else if(hash === '#/profile'){
    return showTemplate(hash)
  } else {
    return showTemplate(hash)
  }
}

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = menu();

  switch(hash){
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/profile':
      containerRoot.appendChild(profile());
      break;
    default:
      containerRoot.innerHTML= `<h3> 404, página no encontrada :( </h3>`
  }
}