import Header from "../Components/Header";
import Cart from "../Components/Cart";
import { Productcontext } from "./Productcontext";

export const CartReducer = (state, action) => {
  const { shoppingCart, TotalPrice, qty, orders } = state;
  let Product;
  let index;
  let updatedPrice;
  let updatedQty;
  let updatedOrders;
  console.log(state);
  //console.log(shopingCart)
  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      console.log("=======data5++++");
      console.log(check);
      console.log("=======data++++++");
      if (check) {
        return state;
      } else {
        // console.log("Add to cart");

        Product = action.product;
        Product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = TotalPrice + Product.attributes.price;
        return {
          shoppingCart: [Product, ...shoppingCart],
          TotalPrice: updatedPrice,
          qty: updatedQty,
        };
        console.log("==============DATA2==============");
        console.log(shoppingCart);
        console.log("============================");
      }
      break;
    case "INC":
      //console.log("INCCCCCCCCCCCCCCCCc");
      Product = action.Cart;
      Product.qty = Product.qty + 1;
      updatedPrice = TotalPrice + Product.attributes.price;
      updatedQty = qty + 1;
      index = shoppingCart.findIndex((Cart) => Cart.id === action.id);
      shoppingCart[index] = Product;
      console.log("=======================DATA3=====");
      console.log("updated price", updatedQty, updatedQty);
      console.log("============================"); //
      return {
        shoppingCart: [...shoppingCart],
        TotalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    case "DEC":
      Product = action.Cart;
      if (Product.qty > 1) {
        Product.qty = Product.qty - 1;
        updatedPrice = TotalPrice - Product.attributes.price;
        updatedQty = qty - 1;
        index = shoppingCart.findIndex((Cart) => Cart.id === action.id);
        shoppingCart[index] = Product;
        console.log("==========data4========");
        console.log("updated price", updatedQty, updatedQty);
        return {
          shoppingCart: [...shoppingCart],
          TotalPrice: updatedPrice,
          qty: updatedQty,
        };
      } else {
        return state;
      }
      break;
    case "DELETE":
      const filtered = shoppingCart.filter(
        (Product) => Product.id !== action.id
      );
      Product = action.Cart;
      updatedQty = qty - Product.qty;
      updatedPrice = TotalPrice - Product.attributes.price * Product.qty;
      return {
        shoppingCart: [...filtered],
        TotalPrice: updatedPrice,
        qty: updatedQty,
      };

      break;
    case "CLEARCART":
      return { shoppingCart: [], TotalPrice: 0, qty: 0, ...Cart };
      break;
    case "ORDERDATA":
      return state;
    default:
      return state;
  }
};
