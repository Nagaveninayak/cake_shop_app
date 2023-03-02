export const cakeActionGenerator = (type, number = 1) => {
  return {
    type: type,
    payload: number,
  };
};
