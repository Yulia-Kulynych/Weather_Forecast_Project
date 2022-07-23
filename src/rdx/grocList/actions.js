export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const FILTERED_ITEM = "FILTERED_ITEM";

export const addNewItem = ({ name, category, show }) => {
  return {
    type: ADD_NEW_ITEM,
    payload: {
      name,
      category,
      show,
    },
  };
};
export const editItem = ({ name, category, id, show }) => {
  return {
    type: EDIT_ITEM,
    payload: {
      name,
      category,
      id,
      show,
    },
  };
};
export const filteredItem = (category) => {
  return {
    type: FILTERED_ITEM,
    payload: {
      category,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
