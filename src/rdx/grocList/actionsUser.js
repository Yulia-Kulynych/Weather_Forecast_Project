export const ADD_NEW_USER = "ADD_NEW_USER";
export const REMOVE_USER = "REMOVE_USER";
export const CHANGE_UNITS = "CHANGE_UNITS";

export const addNewUser = ({ userName, lastName, email, phone, password }) => {
  return {
    type: ADD_NEW_USER,
    payload: {
      userName,
      lastName,
      email,
      phone,
      password,
    },
  };
};
export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
export const changeUnits = (checked) => {
  return {
    type: CHANGE_UNITS,
    unitsInfo: checked,
  };
};
