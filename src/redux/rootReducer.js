import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./iceCream/icecreamReducer";
import userReducer from "./users/usersReducer";

/**combine two reducer into one */
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  users: userReducer,
});

export default rootReducer;
