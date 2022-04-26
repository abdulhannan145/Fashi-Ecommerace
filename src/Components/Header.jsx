import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Global/Cartcontext";
const Header = () => {
  const { qty } = useContext(CartContext);
  return (
    <>
      <header id="header">
        <section className="header__top">
          <div className="container">
            <div className="header__top__contact">
              <div className="header__top__contact__email">
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                <i className="fa fa-envelope"></i>
                <span className="header__top__contact__email__content">
                  hello.colorlib@gmail.com
                </span>
              </div>
              <div className="header__top__contact__phone">
                <i
                  className="fa fa-phone"
                  style={{ transform: "rotate(90deg)" }}
                ></i>
                <span>+65 11 188 8888</span>
              </div>
            </div>
            <div className="header__top__social">
              <div className="header__top__social__lang">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path>
                </svg>
                <select className="social__lang__text" name="language">
                  <option value="english">English</option>
                  <option value="german">German</option>
                </select>
              </div>
              <Link className="header__top__social__login" to="/login">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
                <span className="social__login__text">login</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="header__middle">
          <div className="container">
            <div className="header__middle__logo">
              <Link to="/">
                <img src="Assets/images/logo.png" alt="Fashi" />
              </Link>
            </div>
            <div className="header__middle__search">
              <select
                className="header__middle__search__categories"
                name="category"
              >
                <option value="All Categories">All Categories</option>
              </select>
              <div className="search-input">
                <input
                  type="text"
                  name="search"
                  placeholder="What do you need?"
                />
                <i className="fa fa-search"></i>
              </div>
            </div>
            <div className="header__middle_cart">
              <Link className="notification-btn" to="/cart">
                <i className="fa fa-cart-plus"></i>
                <span className="notification-btn__badge">{qty}</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="header__bottom">
          <div className="container">
            <div className="header__bottom__upper">
              <nav className="main-nav">
                <ul className="main-nav__links">
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/products">SHOP</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                  <li>
                    <Link to="/orders">MY ORDERS</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__bottom__lower collapsible">
              <div className="collapsible__header">
                <i className="fa fa-arrow-circle-left collapsible__icon"></i>
              </div>
              <nav className="header__bottom__lower__nav collapsible__content">
                <ul className="header__bottom__lower__nav__links">
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/products">SHOP</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                  <li>
                    <Link to="/login">MY ORDERS</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
