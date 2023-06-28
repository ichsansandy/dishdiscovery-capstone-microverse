import './style.css';
import spaExperience from './modules/singlePageFunction.js';
import fecthingItem from './modules/fetchingItem.js';
import loadItemCard from './modules/loadItemsCard.js';
import loadLikes from './modules/loadLikes.js';
import totalItemsCounter from './modules/totalItemsCounter.js';
import loadContacts from './modules/loadContact.js';
import { getLikeItem } from './modules/fetchingLikesItems.js';
import loadRanks from './modules/loadRanks.js';

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

let allItem;

const loadAllCard = async () => {
  const array = await Promise.all(ids.map(async (id) => fecthingItem(id)));
  allItem = array.map((item) => item.meals[0]);
};

await loadAllCard();
loadItemCard(allItem);
totalItemsCounter(allItem.length);
await loadLikes();
loadContacts();
const likes = await getLikeItem();

loadRanks(likes, allItem);

window.addEventListener('click', (e) => {
  if (e.target === parmodal) {
    parmodal.style.display = 'none';
  }
});
