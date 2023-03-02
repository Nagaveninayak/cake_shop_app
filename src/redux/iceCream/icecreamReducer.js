import { CONSTANT_TYPES } from "../containerTypes";

const INITAL_STATE = {
  numberOfIcecreams: 20,
};

const icecreamReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT_TYPES.ICE_CREAM_ORDERED: {
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default icecreamReducer;
