import { getLikeItem } from './fetchingLikesItems.js';
import getComments from './getcomments.js';

export const loadLikes = async () => {
  const likes = await getLikeItem();

  likes.forEach((element) => {
    const likeCounter = document.querySelector(`#likes-${element.item_id}`);
    likeCounter.innerHTML = `${element.likes} likes,`;
  });
};

export const loadTotalComments = (ids) => {
  ids.forEach(async (id) => {
    const comment = await getComments(id);

    
      const commentCounter = document.querySelector(`#comments-${id}`);
      commentCounter.innerHTML = `${comment.length} comments,`;
    
  });
};

// export default loadLikes;
