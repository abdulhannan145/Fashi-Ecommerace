import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Shop = () => {
  return (
    <>
      <section className="banner">
        <Link to="/products">
          <div className="container">
            <div className="banner-content">
              <div className="banner-content__men banner-content__item">
                <div className="outline"></div>
                <p className="banner-content__desc">Men's</p>
              </div>
              <div className="banner-content__women banner-content__item">
                <div className="outline"></div>
                <p className="banner-content__desc">Women's</p>
              </div>
              <div className="banner-content__kids banner-content__item">
                <div className="outline"></div>
                <p className="banner-content__desc">All</p>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Shop;
