import React, { useState } from "react";
import { Navbar, Container, Nav, Table } from "react-bootstrap";
import { Menu, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EmptyCartDetails from "./EmptyCartDetails";
import { deleteItemFromCartAction } from "../redux/actions/action";

function Header() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickShoppingCart = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteItemFromCartAction(id));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add To Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light ">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={(Object.keys(cart ?? {}) ?? []).length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickShoppingCart}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card-details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close small-close"
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
            {Object.keys(cart ?? {}).length ?? [] ? (
              <div
                className="card-details"
                style={{ width: "24rem", padding: 10 }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photos</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.values(cart ?? {}) ?? []).map((item) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink
                                to={`/cart/${item.id}`}
                                onClick={handleClose}
                              >
                                <img
                                  src={item?.imgdata}
                                  style={{ width: "5rem", height: "5rem" }}
                                  alt={item.rname}
                                />
                              </NavLink>
                            </td>
                            <td>
                              <p>{item.rname}</p>
                              <p>Price: ₹{item.price}</p>
                              <p>Quantity: {item.qnty}</p>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="fas fa-trash small-trash"
                                  onClick={() => handleDelete(item.id)}
                                />
                              </p>
                            </td>
                            <td
                              className="mt-5"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              <i
                                className="fas fa-trash large-trash"
                                onClick={() => handleDelete(item.id)}
                              />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <p className="text-center">
                      Total: ₹
                      {(Object.values(cart ?? {}) ?? []).reduce(
                        (acc, curr) => acc + curr?.price,
                        0
                      )}
                    </p>
                  </tbody>
                </Table>
              </div>
            ) : (
              <EmptyCartDetails />
            )}
          </div>
        </Menu>
      </Navbar>
    </>
  );
}

export default Header;
