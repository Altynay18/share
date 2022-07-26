export function generateID(id = 0, list) {
  const isInArr = list.some((obj) => obj.id === id);
  if (isInArr) return generateID(id + 1, list);
  else return id;
}