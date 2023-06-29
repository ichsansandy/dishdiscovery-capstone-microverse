import APPS_ID from './api.js';

const postComments = async (data) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APPS_ID}/comments`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: data.item_id,
        username: data.username,
        comment: data.comment,
      }),
    });
  return response;
};
export default postComments;