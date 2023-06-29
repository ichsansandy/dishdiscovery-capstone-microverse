import sortBasedOnLike from './sortBasedOnLikeFunc.js';

const loadRanks = (likeData, mealDatas) => {
  const sortedLike = sortBasedOnLike(likeData);
  const rankContainer = document.querySelector('.rank-wrapper');
  let node = '';

  for (let index = 0; index <= 2; index += 1) {
    const element = sortedLike[index];
    const mealData = mealDatas.find((o) => o.idMeal === element.item_id);
    node += `<div class="card small-rounded">
                                    <div class="card-title small-rounded">${mealData.strMeal}</div>
                                    <img class="small-rounded" src="${mealData.strMealThumb}" width="50%" />
                                    <h2>${element.likes} likes</h2>
                                </div>`;
  }

  rankContainer.innerHTML = node;
};

export default loadRanks;
