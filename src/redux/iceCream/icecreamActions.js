import { CONSTANT_TYPES } from "../containerTypes";

export const icecreamActionsGenerator = (
  type = CONSTANT_TYPES.ICE_CREAM_ORDERED
) => {
  return {
    type,
  };
};
