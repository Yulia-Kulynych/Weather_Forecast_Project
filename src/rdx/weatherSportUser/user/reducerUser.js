import { ADD_NEW_USER } from "./actionsUser";
import { REMOVE_USER } from "./actionsUser";
import { CHANGE_UNITS } from "./actionsUser";

const initialState = {
  logIn: localStorage.getItem("userData") //проверяем есть ли данные
    ? JSON.parse(localStorage.getItem("userData")) //если да, записываем их,
    : {
        //если нет - пустые
        userName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      },
  settings: { units: true },
};

export const userLogInSettingstReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER: {
      return {
        ...state,
        logIn: action.payload,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        logIn: {
          userName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
        },
      };
    }
    case CHANGE_UNITS: {
      return {
        ...state,
        settings: { units: action.unitsInfo },
      };
    }
    default: {
      return state;
    }
  }
};
