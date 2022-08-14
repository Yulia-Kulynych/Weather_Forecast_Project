import { createStore, combineReducers, applyMiddleware } from "redux";
import { weatherSportlistReducer } from "./grocList/reducerW";
import { userLogInSettingstReducer } from "./grocList/reducerUser";
import thunk from "redux-thunk";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export const store = createStore(
  combineReducers({
    weathsportdata: weatherSportlistReducer,
    userdata: userLogInSettingstReducer,
  }),

  applyMiddleware(logger, thunk)
);

console.log("store", store.getState());
