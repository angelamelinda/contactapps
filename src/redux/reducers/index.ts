import { combineReducers } from "redux";
import commonReducer from "./common";
import contactReducer from "./contact";

const reducers = combineReducers({
  commonReducer,
  contactReducer
});

export default reducers;
