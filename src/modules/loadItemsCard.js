import addLikes from './addLikesFunction.js';

const loadItemCard = (items) => {
  const container = document.querySelector('.home-wrapper');

  function card(item) {
    return `<div class="card small-rounded">
                <div class="card-title small-rounded">${item.strMeal}</div>
                <img class="small-rounded" src="${item.strMealThumb}" width="80%" />
                <div class="info-container">
                  <div class="likes">${item.strArea},</div>
                  <div id="likes-${item.idMeal}"class="likes">0 likes,</div>
                  <div id="comments-${item.idMeal}" class="comments">0 comments</div>
                </div>
                <div class="card-button-container">
                    <div  class="card-button small-rounded like-button" data-id="${item.idMeal}">Add Like</div>
                    <div  class="card-button small-rounded">View all comments</div>
                </div>                  
            </div>
            <dialog></dialog>
            `;
  }
  container.innerHTML = items.map((item) => card(item)).join('');

  const likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      addLikes(id);
    });
  });
};

export default loadItemCard;
