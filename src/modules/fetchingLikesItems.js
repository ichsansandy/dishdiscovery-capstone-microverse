import APPS_ID from './api.js';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APPS_ID}/likes/`;

export const postLikeItem = async (input) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
    },
    body: JSON.stringify(input),
  });
  return response;
};

export const getLikeItem = async () => {
  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
};
