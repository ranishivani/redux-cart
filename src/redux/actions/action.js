export const AddItemToCartAction = (item) => {
  return { type: "ADD_ITEM_TO_CART", payload: item };
};

export const deleteItemFromCartAction = (itemId) => {
  return { type: "DELETE_ITEM_FROM_CART", payload: itemId };
};

export const decreaseItemQuantity = (itemId) => {
  return { type: "DECREASE_ITEM_QUANTITY", payload: itemId };
};

export const increaseItemQuantity = (itemId) => {
  return { type: "INCREASE_ITEM_QUANTITY", payload: itemId };
};
