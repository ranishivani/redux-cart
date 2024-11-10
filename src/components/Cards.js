import React from "react";
import { Card } from "react-bootstrap";
import CardsData from "./CardsData";
import "./style.css";
import { NavLink } from "react-router-dom";
import AddButton from "./AddButton";
import QuantitySelector from "./QuantitySelector";
import { useSelector } from "react-redux";

function Cards() {
  const { cart } = useSelector((state) => state.cartReducer);
  console.log("cart: ", { cart });
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {CardsData.map((item, key) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card-style"
              >
                <NavLink to={`/cart/${item.id}`} key={key}>
                  <Card.Img
                    variant="top"
                    src={item.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                </NavLink>
                <Card.Body>
                  <NavLink to={`/cart/${item.id}`} key={key}>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>₹{item.price}</Card.Text>
                  </NavLink>
                  {cart[item.id]?.qnty ? (
                    <QuantitySelector item={cart[item.id]} />
                  ) : (
                    <AddButton item={item} />
                  )}
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
