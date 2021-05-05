// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { changeRoute } from './lib/router.js';
import { menu } from './lib/view/templateMenu.js';

const init = () => {
  document.getElementById('root').innerHTML = menu();

  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRoute(window.location.hash);
  })
}

window.addEventListener('load', init)