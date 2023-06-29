import fecthingItem from './fetchingItem.js';

const loadAllCard = async () => {
  const ids = [53027, 52963, 53026, 53029, 53065, 52858, 52913, 52786, 53000, 52930, 52903, 53059];

  const array = await Promise.all(ids.map(async (id) => fecthingItem(id)));
  const allItem = array.map((item) => item.meals[0]);
  return allItem;
};

export default loadAllCard;
