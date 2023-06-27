import fecthingItem from './fetchingItem.js';

const ids = [53027, 52963, 53026, 53026, 53065, 52858, 52913, 52786, 53000, 52930, 52903, 53059];

const itemsAfterFetch = () => {
  const array = [];
  ids.forEach((id) => {
    fecthingItem(id).then((data) => {
      array.push(data.meals[0]);
    });
  });
  return array;
};

export default itemsAfterFetch;
