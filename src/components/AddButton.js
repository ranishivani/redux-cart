import React from "react";
import { Button } from "react-bootstrap";
import { AddItemToCartAction } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

AddButton.propTypes = {
  item: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired,
};

const AddButton = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(AddItemToCartAction(item));
  };

  return (
    <div className="button-div d-flex justify-content-center">
      <Button
        variant="primary"
        className="col-lg-12"
        onClick={() => addToCart(item)}
      >
        Add To Cart &nbsp;
        <i className="fas fa-cart-plus" />
      </Button>
    </div>
  );
};

export default AddButton;
