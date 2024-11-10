const INIT_STATE = {
  cart: {},
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      console.log("action: ", { action, state });
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            ...action.payload,
            qnty: 1,
          },
        },
      };

    case "DECREASE_ITEM_QUANTITY":
      console.log("check: ", { state, action });
      return {
        ...state,
        cart: {
          ...state.cart,
          ...(state.cart[action.payload].qnty > 0
            ? {
                [action.payload]: {
                  ...state.cart[action.payload],
                  qnty: state.cart[action.payload].qnty - 1,
                },
              }
            : {}),
        },
      };

    case "INCREASE_ITEM_QUANTITY":
      console.log("check add quantity: ", { state, action });
      return {
        ...state,
        cart: {
          ...state.cart,
          ...{
            [action.payload]: {
              ...state.cart[action.payload],
              qnty: state.cart[action.payload].qnty + 1,
            },
          },
        },
      };

    case "DELETE_ITEM_FROM_CART":
      return {
        ...state,
        cart: Object.fromEntries(
          Object.entries(state.cart).filter(
            ([itemId]) => Number(itemId) !== action.payload
          )
        ),
      };
    default:
      return state;
  }
};
