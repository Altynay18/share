export function generateID(id, list) {
  const newId = id || 0;
  const isInArr = list.some((obj) => obj.id === newId);
  if (isInArr) return generateID(newId + 1, list);
  else return newId;
}