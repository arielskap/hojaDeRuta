const generateBoxes = () => {
  const MAX_BOXES = 10;
  const newObject = [];
  for (let i = 1; i <= MAX_BOXES; i++) {
    newObject.push({
      'id': i,
    });
  }
  return newObject;
};

export default generateBoxes;
