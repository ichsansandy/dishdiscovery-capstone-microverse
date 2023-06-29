import getComments from './getcomments.js';

const com = (id) => {
  const showComments = document.querySelector('#ulc');
  const Show = getComments(id);
  let x = [];
  let y = '';
  Show.then((item) => {
    x = item;
    x.forEach((item) => {
      y += `<div class="commentBox"><div>${item.username}</div><div>${item.comment}</div></div>`;
      showComments.innerHTML = y;
    });
  }).catch(() => {
    showComments.innerHTML += '<div class="commentBox"><span></span><span>No Comments here</span></div>';
  });
};
export default com;