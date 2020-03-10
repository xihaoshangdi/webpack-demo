import './assets/css/index.css';
import './assets/css/x.scss';
import './assets/css/y.less';
import './assets/css/z.styl';
import imgPath from './assets/img/1.jpg';

function addElement(tagElement, container) {
  let element = document.createElement(tagElement);
  document.getElementsByTagName(container)[0].appendChild(element);
  return element;
}

let imgTag = addElement('img', 'body');
imgTag.src = imgPath;

let buttonTag = addElement('button', 'body');
buttonTag.innerText = '懒加载';
buttonTag.onclick = () => {
  let promise1 = import('./assets/css/lazy.css');
  let promise2 = import('./lazy.js');
  Promise.all([promise1, promise2]).then(function(value) {
    value[1].default();
  });
};
