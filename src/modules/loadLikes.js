import { getLikeItem } from './fetchingLikesItems.js';
import getComments from './getcomments.js';

export const loadLikes = async () => {
  const likes = await getLikeItem();

  likes.forEach((element) => {
    const likeCounter = document.querySelector(`#likes-${element.item_id}`);
    likeCounter.innerHTML = `${element.likes} likes,`;
  });
};

export const loadtotalcomments = async (id) => {
  const comment = await getComments(id);

  const commentCounter = document.querySelector(`#comments-${id}`);
  if (comment.length > 0) {
    commentCounter.innerHTML = `${comment.length} comments,`;
  }
};

export const loadTotalComments = (ids) => {
  ids.forEach(async (id) => {
    await loadtotalcomments(id);
  });
};
