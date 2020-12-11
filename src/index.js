import foodCards from './templates/food-cards.hbs';
import menuItems from './menu.json';
import './styles.css';

const listItems = document.querySelector('ul.js-menu');
const markup = createList(menuItems);
listItems.insertAdjacentHTML('beforeend', markup);

function createList(menuItems) {
  return foodCards(menuItems);
}

const bodyElem = document.querySelector('body');
const switchToggle = document.querySelector('#theme-switch-toggle');
switchToggle.addEventListener('change', clickOnCheckbox);

const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function clickOnCheckbox(elem) {
  if (elem.target.checked) {
    bodyElem.classList.add(THEME.DARK);
    bodyElem.classList.remove(THEME.LIGHT);
  } else {
    bodyElem.classList.add(THEME.LIGHT);
    bodyElem.classList.remove(THEME.DARK);
  }
  localStorage.setItem('theme', bodyElem.classList);
}

const checkedTheme = localStorage.getItem('theme');

if (checkedTheme === THEME.DARK) {
  switchToggle.checked = true;
  bodyElem.classList.add(THEME.DARK);
}