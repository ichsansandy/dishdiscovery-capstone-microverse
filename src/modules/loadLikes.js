import { getLikeItem } from './fetchingLikesItems.js';

const loadLikes = async () => {
  const likes = await getLikeItem();

  likes.forEach((element) => {
    const likeCounter = document.querySelector(`#likes-${element.item_id}`);
    likeCounter.innerHTML = `${element.likes} likes,`;
  });
};

export default loadLikes;
