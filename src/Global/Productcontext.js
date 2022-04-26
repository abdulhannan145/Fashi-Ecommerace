import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Productcontext = createContext();
const ProductcontextProvider = (props) => {
  const [product, setProducts] = useState([]);

  const getProducts = async (url) => {
    const response = await axios.get(
      `https://fashi-backend.herokuapp.com/api/products?populate=*`
    );

    setProducts(response.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Productcontext.Provider value={{ product: [...product] }}>
      {props.children}
    </Productcontext.Provider>
  );
};
export default ProductcontextProvider;
