const fecthingItem = async (itemId) => {
  const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`, { method: 'GET' });
  return resp.json();
};

export default fecthingItem;
