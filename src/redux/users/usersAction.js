import axios from "axios";
import { CONSTANT_TYPES } from "../containerTypes";

export const userActionGenerator = (type, payload) => {
  return {
    type,
    payload,
  };
};

/**async action generators dispatch -- (usage of redux-thunk)*/
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userActionGenerator(CONSTANT_TYPES.FETCH_USER_REQUEST));
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(userActionGenerator(CONSTANT_TYPES.FETCH_USER_SUCCESS, users));
      })
      .catch((error) => {
        dispatch(userActionGenerator(CONSTANT_TYPES.FETCH_USER_ERROR, error));
      });
  };
};
