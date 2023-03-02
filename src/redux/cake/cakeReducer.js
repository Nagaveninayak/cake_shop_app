import { CONSTANT_TYPES } from "../containerTypes";

const INITIAL_STATE = {
  numberOfCakes: 10,
};

const cakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT_TYPES.CAKE_ORDERED: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default cakeReducer;
