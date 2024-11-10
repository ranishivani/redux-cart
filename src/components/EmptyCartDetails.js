import React from "react";

function EmptyCartDetails() {
  return (
    <>
      <p style={{ fontSize: 22 }}>Your Cart is Empty!</p>
      <img
        src="./cart.gif"
        alt="empty cart"
        className="empty-cart-img"
        style={{ width: "5rem", padding: 10 }}
      />
    </>
  );
}

export default EmptyCartDetails;
