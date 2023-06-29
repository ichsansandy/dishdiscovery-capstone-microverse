import './style.css';
import spaExperience from './modules/singlePageFunction.js';
import loadItemCard from './modules/loadItemsCard.js';
import { loadLikes, loadTotalComments } from './modules/loadLikes.js';
import totalItemsCounter from './modules/totalItemsCounter.js';
import loadContacts from './modules/loadContact.js';
import loadAllCard from './modules/loadItemData.js';

const HAMBURGER = document.querySelector('.hamburger');
const MOBILE_MENU = document.querySelector('.mobile-menu');
const X_BUTTON = document.querySelector('.close-x');
const parmodal = document.querySelector('.parmodal');

const ids = [53027, 52963, 53026, 53029, 53065, 52858, 52913, 52786, 53000, 52930, 52903, 53059];

HAMBURGER.addEventListener('click', () => {
  HAMBURGER.classList.toggle('disabled');
  MOBILE_MENU.classList.toggle('active');
  X_BUTTON.classList.toggle('active');
});

X_BUTTON.addEventListener('click', () => {
  MOBILE_MENU.classList.toggle('active');
  HAMBURGER.classList.toggle('disabled');
});

spaExperience();

const allItem = await loadAllCard();
loadItemCard(allItem);
totalItemsCounter(allItem.length);
await loadLikes();
loadContacts();

window.addEventListener('click', (e) => {
  if (e.target === parmodal) {
    parmodal.style.display = 'none';
  }
});

loadTotalComments(ids);
