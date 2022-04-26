import React, { useState, useContext, useEffect } from "react";
import { Productcontext } from "../Global/Productcontext";
import { CartContext } from "../Global/Cartcontext";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  // const { product } = useContext(Productcontext);
  const { dispatch } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const notify = () =>
    toast.success("Product added Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://fashi-backend.herokuapp.com/api/products?populate=*"
        );
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const getProducts = async (gender) => {
    try {
      let response;
      if (gender === "all") {
        response = await axios.get(
          "https://fashi-backend.herokuapp.com/api/products?populate=*"
        );
        setProducts(response.data.data);
      } else if (gender === "men" || gender == "women") {
        response = await axios.get(
          `https://fashi-backend.herokuapp.com/api/products?filters[gender][name][$eq]=${gender}&populate=*`
        );
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenderClick = (gender) => {
    getProducts(gender);
  };

  return (
    <>
      <section className="banner main-main">
        {/* <Link to="/products"> */}
        <div className="container">
          <div className="banner-content">
            <div
              className="banner-content__men banner-content__item"
              onClick={() => handleGenderClick("men")}
            >
              <div className="outline"></div>
              <p className="banner-content__desc">Men's</p>
            </div>
            <div
              className="banner-content__women banner-content__item"
              onClick={() => handleGenderClick("women")}
            >
              <div className="outline"></div>
              <p className="banner-content__desc">Women's</p>
            </div>
            <div
              className="banner-content__kids banner-content__item"
              onClick={() => handleGenderClick("all")}
            >
              <div className="outline"></div>
              <p className="banner-content__desc">All</p>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </section>
      <ul className="products-category-nav">
        <li className="products-category-nav__item">All</li>
        <li className="products-category-nav__item">Jeans</li>
        <li className="products-category-nav__item">Shirts</li>
        <li className="products-category-nav__item__selected">Shoes</li>
      </ul>
      <section className="product-page__products main-main">
        {products.map((product) => (
          <div className="itemcard" key={product.id}>
            <img
              src={
                `https://fashi-backend.herokuapp.com${product?.attributes.featureImage.data.attributes.url}` ||
                "assets/images/jeans.jpg"
              }
              alt=""
              className="product-img"
            />
            <div className="item-card__btns">
              <button
                className="btn-secondary add-to-cart"
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", id: product.id, product });
                  notify();
                }}
              >
                {" "}
                Add To Cart
              </button>
            </div>
            <div className="item-card__desc">
              <p className="item-card__category"></p>
              <p className="item-card__desc__name">{product.attributes.name}</p>
              <p className="item-card__desc__price">
                Rs.{product.attributes.price}
              </p>
            </div>
          </div>
        ))}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </>
  );
};

export default Products;
