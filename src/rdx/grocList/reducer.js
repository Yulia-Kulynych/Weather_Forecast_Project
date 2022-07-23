import { ADD_NEW_ITEM, REMOVE_ITEM, EDIT_ITEM, FILTERED_ITEM } from "./actions";

const initialState = {
  products: [
    {
      id: "1",
      name: "Milk",
      category: "Milk_products",
      show: true,
    },
    {
      id: "2",
      name: "Cheese",
      category: "Milk_products",
      show: true,
    },
    {
      id: "3",
      name: "Orange",
      category: "Fruits",
      show: true,
    },
    {
      id: "4",
      name: "Juice",
      category: "Drinks",
      show: true,
    },
    {
      id: "5",
      name: "Wine",
      category: "Drinks",
      show: true,
    },
  ],
  nextId: 6,
};

export const groclistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      return {
        ...state,
        products: [
          ...state.products,
          { ...action.payload, id: state.nextId }, //новий елемент
        ],
        nextId: state.nextId + 1, //id якого розраховуємо
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        products: state.products.map((i) => {
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
        products: state.products.map((i) => {
          return i.category
            .toLowerCase()
            .indexOf(action.payload.category.toLowerCase()) > -1 ||
            !action.payload.category ||
            i.category
              .toLowerCase()
              .indexOf(action.payload.category.toLowerCase()) > -1
            ? { ...i, show: true }
            : { ...i, show: false };
        }),
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        products: state.products.filter((i) => i.id !== action.payload), //що змінюється в products
      };
    }
    default: {
      return state;
    }
  }
};
