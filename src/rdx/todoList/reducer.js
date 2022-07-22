import { ADD_NEW_ITEM, REMOVE_ITEM, EDIT_ITEM, FILTERED_ITEM } from "./actions";

const initialState = {
  tasks: [
    {
      id: "1",
      name: "Milk",
      assignee: "Milk_products",
      show: true,
    },
    {
      id: "2",
      name: "Cheese",
      assignee: "Milk_products",
      show: true,
    },
    {
      id: "3",
      name: "Orange",
      assignee: "Fruits",
      show: true,
    },
    {
      id: "4",
      name: "Juice",
      assignee: "Drinks",
      show: true,
    },
    {
      id: "5",
      name: "Wine",
      assignee: "Drinks",
      show: true,
    },
  ],
  nextId: 6,
};

export const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload, id: state.nextId }, //новий елемент
        ],
        nextId: state.nextId + 1, //id якого розраховуємо
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        tasks: state.tasks.map((i) => {
          if (i.id == action.payload.id) {
            return action.payload;
          } else {
            return i;
          }
        }),
      };
    }
    case FILTERED_ITEM: {
      return {
        ...state,
        tasks: state.tasks.map((i) => {
          return i.assignee
            .toLowerCase()
            .indexOf(action.payload.assignee.toLowerCase()) > -1 ||
            !action.payload.assignee ||
            i.assignee
              .toLowerCase()
              .indexOf(action.payload.assignee.toLowerCase()) > -1
            ? { ...i, show: true }
            : { ...i, show: false };
        }),
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        tasks: state.tasks.filter((i) => i.id !== action.payload), //що змінюється в tasks
      };
    }
    default: {
      return state;
    }
  }
};
