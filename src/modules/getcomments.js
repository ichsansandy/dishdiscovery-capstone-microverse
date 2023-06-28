import APPS_ID from './api.js';

const getComments = async (f) => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APPS_ID}/comments?item_id=${f}`,
  );
  const datas = await res.json();
  return datas;
};

export default getComments;