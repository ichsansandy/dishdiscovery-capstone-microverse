const loadItemCard = (items) => {
  const container = document.querySelector('.home-section');

  function card(item) {
    return `<div class="card small-rounded">
                <div class="card-title small-rounded">${item.strMeal}</div>
                <img class="small-rounded" src="${item.strMealThumb}" width="80%" />
                <div class="card-button-container">
                    <div class="card-button small-rounded">Like</div>
                    <div class="card-button small-rounded">Comment</div>
                </div>                  
            </div>`;
  }
  container.innerHTML = items.map((item) => card(item)).join('');
};

export default loadItemCard;
