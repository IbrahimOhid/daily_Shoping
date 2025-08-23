export const initialValue = {
  cartData: [],
};
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
    case "REMOVE_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
