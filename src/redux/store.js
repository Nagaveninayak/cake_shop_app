import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

//apply logger - you can see in the console
const store = legacy_createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
