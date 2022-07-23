import { createStore, combineReducers } from "redux";
import { groclistReducer } from "./grocList/reducer";

export const store = createStore(
  combineReducers({
    groc: groclistReducer, //groc:
  })
);
