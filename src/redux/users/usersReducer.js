import { CONSTANT_TYPES } from "../containerTypes";

const INITAL_STATE = {
  isLoading: false,
  users: [],
  error: "",
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT_TYPES.FETCH_USER_REQUEST: {
      return {
        isLoading: true,
        users: [],
        error: "",
      };
    }
    case CONSTANT_TYPES.FETCH_USER_SUCCESS: {
      return {
        isLoading: false,
        users: action.payload,
        error: "",
      };
    }
    case CONSTANT_TYPES.FETCH_USER_ERROR: {
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
