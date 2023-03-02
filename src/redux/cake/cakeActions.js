import { CONSTANT_TYPES } from "../containerTypes";

export const cakeActionGenerator = (
  type = CONSTANT_TYPES.CAKE_ORDERED,
  number = 1
) => {
  return {
    type: type,
    payload: number,
  };
};
