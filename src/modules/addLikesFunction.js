import Swal from 'sweetalert2';

import { postLikeItem } from './fetchingLikesItems.js';
import { loadLikes } from './loadLikes.js';

const addLikes = (itemId) => {
  postLikeItem({
    item_id: itemId,
  }).then((resp) => {
    if (resp.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Food liked',
        text: 'Liked for the food successfully updated',
      }).then(loadLikes());
      return true;
    }
    return false;
  });
};

export default addLikes;
