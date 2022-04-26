import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Global/Cartcontext";
import axios from "axios";
const Orders = () => {
  const [Orders, setOrders] = useState([]);

  // const { shoppingCart, TotalPrice, qty, orders, dispatch } =
  //   useContext(CartContext);

  // useEffect(() => {
  //   console.log("================S ORDER================");
  //   console.log(shoppingCart);

  //   console.log("================E ORDER================");
  // }, []);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(
          "https://fashi-backend.herokuapp.com/api/orders?filters[status][$eq]=hannan_pending"
        );
        setOrders(response.data.data);
        console.log("this", response.data.data[0].id);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <>
      <div class="main">
        <section class="orders" id="orders">
          <div class="container">
            <div class="section-heading">
              <h2 class="section-heading__heading">My Orders</h2>
            </div>
            <table class="orders-table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Placed On</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {Orders.map((order) => (
                <tbody>
                  <tr class="order-row_pending">
                    <th scope="col">{order.id}</th>
                    <th scope="col">
                      {" "}
                      {order.attributes.createdAt.slice(0, 10)}
                    </th>
                    <th scope="col">
                      Rs.{order.attributes.order_details.TotalPrice}
                    </th>
                    <th scope="col" class="order_pending">
                      {order.attributes.status}
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Orders;
