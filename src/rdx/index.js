import { createStore, combineReducers, applyMiddleware } from "redux";
import { weatherSportlistReducer } from "./weatherSportUser/weather_sport/reducerW";
import { userLogInSettingstReducer } from "./weatherSportUser/user/reducerUser";
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
