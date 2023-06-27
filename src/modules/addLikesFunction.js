import { postLikeItem } from './fetchingLikesItems.js';

const addLikes = (itemId) => {
  postLikeItem({
    item_id: itemId,
  }).then((resp) => {
    if (resp.status === 201) {
      return true;
    }
    return false;
  });
};

export default addLikes;
