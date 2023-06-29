const totalCommentsCounter = (total, id) => {
  const totalCommentsCounter = document.querySelector(`#comments-${id}`);
  totalCommentsCounter.innerHTML = `${total} comments,`;
};

export default totalCommentsCounter;