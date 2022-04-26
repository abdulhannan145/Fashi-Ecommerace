import { React, createContext, useReducer } from "react";
import { CartReducer } from "./Cartreducer";

export const CartContext = createContext();
const CartContextProvider = (props) => {
  const [Cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    TotalPrice: 0,
    qty: 0,
    orders: 0,
  });
  console.log("=======DATA=====================");
  console.log(Cart);
  console.log("============================");
  //console.log(dispatch);
  return (
    <CartContext.Provider value={{ ...Cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
