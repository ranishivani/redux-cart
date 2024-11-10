import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  AddItemToCartAction,
  decreaseItemQuantity,
  deleteItemFromCartAction,
  increaseItemQuantity,
} from "../redux/actions/action";
import { Box, IconButton, Typography } from "@mui/material";

QuantitySelector.propTypes = {
  item: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired,
};

function QuantitySelector({ item }) {
  console.log({ item, a: 1 });
  const { id, qnty: quantity } = item;
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id, quantity, item) => {
    console.log("params in handleIncreaseQuantity: ", { id, quantity, item });
    if (quantity === 0) dispatch(AddItemToCartAction(item));
    else dispatch(increaseItemQuantity(id));
  };

  const handleDecreasequantity = (id, quantity) => {
    if (quantity === 1) dispatch(deleteItemFromCartAction(id));
    else dispatch(decreaseItemQuantity(id));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      style={{ backgroundColor: "#ddd", width: "8rem", borderRadius: 5 }}
    >
      <IconButton
        onClick={() => handleDecreasequantity(id, quantity)}
        aria-label="decrease quantity"
      >
        <RemoveIcon />
      </IconButton>

      <Typography variant="h6" sx={{ mx: 2 }}>
        {quantity}
      </Typography>

      <IconButton
        onClick={() => handleIncreaseQuantity(id, quantity, item)}
        aria-label="increase quantity"
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}

export default QuantitySelector;
