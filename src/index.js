import foodCards from './templates/food-cards.hbs';
import menuItems from './menu.json';
import './styles.css';

const listItems = document.querySelector('ul.js-menu');
const markup = foodCards(menuItems);
const bodyElem = document.querySelector('body');
const switchToggle = document.querySelector('#theme-switch-toggle');
const checkedTheme = localStorage.getItem('theme');
const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

listItems.insertAdjacentHTML('beforeend', markup);

function clickOnCheckbox(event) {
  if (event.target.click) {
    bodyElem.classList.toggle(THEME.DARK);
    localStorage.setItem('theme', bodyElem.classList);
  } else {
  bodyElem.classList.toggle(THEME.LIGHT);
}
}

switchToggle.addEventListener('change', clickOnCheckbox);
if (checkedTheme === THEME.DARK) {
  switchToggle.checked = true;
  bodyElem.classList.add(THEME.DARK);
}