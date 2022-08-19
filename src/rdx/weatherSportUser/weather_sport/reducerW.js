import {
  FETCH_ITEMS_ACTION_REQUEST,
  FETCH_ITEMS_ACTION_SUCCESS,
  FETCH_ITEMS_ACTION_FAILURE,
} from "./actionsW";

import {
  FETCH_ITEMSH_ACTION_SUCCESS,
  FETCH_ITEMSH_ACTION_REQUEST,
  FETCH_ITEMSH_ACTION_FAILURE,
} from "./actionsW";

import {
  FETCH_ITEMSS_ACTION_SUCCESS,
  FETCH_ITEMSS_ACTION_REQUEST,
  FETCH_ITEMSS_ACTION_FAILURE,
} from "./actionsW";

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
};

export const weatherSportlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_ACTION_SUCCESS: {
      return {
        ...state,
        info: { ...state.info, dataServer: action.items },
      };
    }
    case FETCH_ITEMS_ACTION_REQUEST: {
      return {
        ...state,
        isItemsLoading: true,
      };
    }
    case FETCH_ITEMS_ACTION_FAILURE: {
      return {
        ...state,
        isItemsLoading: false,
        error: action.error,
      };
    }
    case FETCH_ITEMSH_ACTION_SUCCESS: {
      return {
        ...state,
        info: { ...state.info, dataServerHistory: action.items },
      };
    }
    case FETCH_ITEMSH_ACTION_REQUEST: {
      return {
        ...state,
        isItemsHystoryLoading: true,
      };
    }
    case FETCH_ITEMSH_ACTION_FAILURE: {
      return {
        ...state,
        isItemsHystoryLoading: false,
        errorH: action.error,
      };
    }

    case FETCH_ITEMSS_ACTION_SUCCESS: {
      return {
        ...state,
        info: { ...state.info, dataServerSport: action.items },
      };
    }
    case FETCH_ITEMSS_ACTION_REQUEST: {
      return {
        ...state,
        isItemsSportLoading: true,
      };
    }
    case FETCH_ITEMSS_ACTION_FAILURE: {
      return {
        ...state,
        isItemsSportLoading: false,
        errorS: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
