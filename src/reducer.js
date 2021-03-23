export const initialState = {
  items: 0,
  product: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: action.items,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        product: [...state.product, action.product],
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};

export default reducer;
