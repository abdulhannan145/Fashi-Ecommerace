import React, { useContext, useState } from "react";
import { CartContext } from "../Global/Cartcontext";
import StripeCheckout from "react-stripe-checkout";
import { empty } from "@apollo/client";
import Orders from "./Orders";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { shoppingCart, TotalPrice, qty, orders, dispatch } =
    useContext(CartContext);
  const orderHandler = (token) => {
    console.log("=============sssss===============");
    console.log(token);

    console.log("==============eeee==============");

    const setOrders = async () => {
      const newOrder = {
        data: {
          status: "hannan_pending",
          order_details: { TotalPrice },
        },
      };

      try {
        const response = await axios.post(
          "https://fashi-backend.herokuapp.com/api/orders",
          newOrder
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    setOrders();
    dispatch({ type: "CLEARCART", Cart });
    window.location = "/orders";

    //onclick(Orders);
  };

  // console.log(shoppingCart);
  const handleToken = (token) => {
    console.log(token);
    if (token !== 0 || !empty) {
      orderHandler(token);
    }
  };
  const handlestripe = () => {};
  return (
    <>
      <div className="main main-main">
        <div className="cart">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-heading__heading">Cart</h2>
            </div>
            {shoppingCart.length > 0 ? (
              shoppingCart.map((Cart) => (
                <>
                  <div className="cart__items" key={Cart.id}>
                    <div className="cart__items__item">
                      <div className="cart__item-details-left">
                        <div className="product-pic-title">
                          <img
                            src={`https://fashi-backend.herokuapp.com${Cart?.attributes.featureImage.data.attributes.url}`}
                            alt=""
                          />
                          <div className="cart__item-name">
                            {Cart.attributes.name}
                          </div>
                        </div>
                        <div className="product-price">
                          <span className="cart__total__total-price">
                            Rs.{Cart.attributes.price}
                          </span>
                        </div>
                      </div>
                      <div className="cart__item-qty-section">
                        <button
                          onClick={() =>
                            dispatch({ type: "INC", id: Cart.id, Cart })
                          }
                        >
                          +
                        </button>
                        <span className="cart__item-qty">{Cart.qty}</span>
                        <button
                          onClick={() =>
                            dispatch({ type: "DEC", id: Cart.id, Cart })
                          }
                        >
                          -
                        </button>
                      </div>
                      <div className="cart__item-details-right">
                        <span className="cart__item-price">
                          Rs.{Cart.attributes.price * Cart.qty}
                        </span>
                        <button
                          className="cart__item__remove-btn"
                          onClick={() =>
                            dispatch({ type: "DELETE", id: Cart.id, Cart })
                          }
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <h1>Sorry Your cart is currently Empty</h1>
            )}
            {shoppingCart.length > 0 ? (
              <>
                <div className="cart__total">
                  <span>TOTAL:</span>
                  <span className="cart__total__total-price total-price">
                    Rs.{TotalPrice}
                  </span>
                </div>
                <div className="cart-btns">
                  <button
                    className=" cart__clear-cart-btn btn-primary"
                    onClick={() => dispatch({ type: "CLEARCART", Cart })}
                  >
                    CLEAR CART
                  </button>

                  <div className="stripe-checkout">
                    <StripeCheckout
                      className=".btn-primary"
                      stripeKey="pk_test_51KbOTPGroKFlHooJjxhQe71bdqWIujlHe8nngVAvSEIrW5c6guunixodyBnhuvXMLQ7SDcDVrATRzjdQt3UI1WS4009dN19J2T"
                      token={handleToken}
                      billingAddress
                      shippingAddress
                      amount={TotalPrice * 100}
                      name="All Products"
                      currency="pkr"
                    ></StripeCheckout>
                  </div>
                </div>
              </>
            ) : (
              "Orders"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
