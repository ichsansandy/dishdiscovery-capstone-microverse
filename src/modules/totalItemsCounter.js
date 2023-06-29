const totalItemsCounter = (total) => {
  const totalItemsCounter = document.querySelector('.total-meals');
  totalItemsCounter.innerHTML = ` ( ${total} )`;
};

export default totalItemsCounter;
