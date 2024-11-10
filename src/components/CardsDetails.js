import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EmptyCartDetails from "./EmptyCartDetails";
import { deleteItemFromCartAction } from "../redux/actions/action";
import CardsData from "./CardsData";
import AddButton from "./AddButton";
import QuantitySelector from "./QuantitySelector";

function CardsDetails() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const id = Number(useParams().id);
  console.log("id: ", { id });
  const { cart } = useSelector((state) => state.cartReducer);
  const [isItemInCart, setIsItemInCart] = useState(null);
  const [item, setItem] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteItemFromCartAction(id));
    history("/");
  };
  // setItem(CardsData.find((cartItem) => cartItem.id === Number(id)));
  useEffect(() => {
    console.log("here");
    const foundItemInCart = (Object.values(cart) ?? []).find(
      (cartItem) => cartItem.id === Number(id)
    );
    if (foundItemInCart) setIsItemInCart(foundItemInCart);

    setItem(
      foundItemInCart ??
        CardsData.find((cartItem) => cartItem.id === Number(id))
    );
    console.log("check details : ", { foundItemInCart, CardsData, cart, id });
  }, [id, cart]);
  console.log("item in cardeteails: ", { item, cart });

  return id ? (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="items-details">
            <div className="items-img">
              <img src={item?.imgdata} />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant: </strong>
                      {item?.rname}
                    </p>
                    <p>
                      <strong>Price: </strong>₹{item?.price}
                    </p>
                    <p>
                      <strong>Dishes: </strong>
                      {item?.address}
                    </p>
                    <p>
                      <strong>Total: </strong>₹{item?.price * (item?.qnty ?? 1)}
                    </p>
                    {item?.qnty !== 0 && (
                      <QuantitySelector
                        item={
                          item ??
                          CardsData.find(
                            (cartItem) => cartItem.id === Number(id)
                          )
                        }
                      />
                    )}
                  </td>
                  <td>
                    <p>
                      <strong>Rating: </strong>
                      <span
                        style={{
                          background: "green",
                          color: "white",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        {item?.rating}★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review: </strong>
                      {item?.somedata}
                    </p>
                    {isItemInCart ? (
                      <p>
                        <Button
                          variant="outlined"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDelete(item.id)}
                        >
                          Remove
                        </Button>
                      </p>
                    ) : (
                      <AddButton item={item} />
                    )}
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  ) : (
    <EmptyCartDetails />
  );
}

export default CardsDetails;
