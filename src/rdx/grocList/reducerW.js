import { FETCH_ITEMS_ACTION_SUCCESS } from "./actionsW";
import { FETCH_ITEMSH_ACTION_SUCCESS } from "./actionsW";
import { FETCH_ITEMSS_ACTION_SUCCESS } from "./actionsW";

const initialState = {
  info: {
    weatherSport: {
      location: {},
      forecast: {},
      date: {},
      sport: {},
    },
    dataServer: {},
    dataServerHistory: {},
    dataServerSport: {},
  },
  profile: {
    logIn: {
      userName: "",
      lastName: "",
      email: "",
      phone: "",
      pssword: "",
    },
    settings: {},
  },
};

export const weatherSportlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_ACTION_SUCCESS: {
      return {
        ...state,
        info: { ...state.info, dataServer: action.items },
      };
    }

    case FETCH_ITEMSH_ACTION_SUCCESS: {
      return {
        ...state,
        info: { ...state.info, dataServerHistory: action.items },
      };
    }
    case FETCH_ITEMSS_ACTION_SUCCESS: {
      return {
        ...state,
        info: { ...state.info, dataServerSport: action.items },
      };
    }

    default: {
      return state;
    }
  }
};
