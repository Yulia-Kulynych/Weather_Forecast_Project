import { ADD_NEW_USER } from "./actionsUser";
import { REMOVE_USER } from "./actionsUser";
// import { FETCH_ITEMSH_ACTION_SUCCESS } from "./actionsW";
// import { FETCH_ITEMSS_ACTION_SUCCESS } from "./actionsW";

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
  settings: {},
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
    default: {
      return state;
    }
  }
};
