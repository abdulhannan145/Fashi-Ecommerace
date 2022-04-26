import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer__content">
            <ul className="footer__address">
              <li className="footer__address__logo">
                <a href="#">
                  <img src="./Assets/images/xfooter-logo.png" alt="Fashi. " />
                </a>
              </li>
              <li>Address: 60 Road 11378 New York</li>
              <li>Phone: +65 11.188.888</li>
              <li>Email: hello.colorlib@gmail.com</li>
              <li>
                <ul className="footer__social-icons">
                  <li>
                    <i className="fa fa-map-marker"></i>
                  </li>
                  <li>
                    <i
                      className="fa fa-phone"
                      style={{ transform: "rotate(90deg)" }}
                    ></i>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="footer__nav">
              <li>
                <ul>
                  <li className="footer__nav__heading">Information</li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Servicer</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="footer__nav__heading">My Account</li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="#">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="footer__nav__heading">
                    Join Our Newsletter Now
                  </li>
                  <li>
                    Get E-mail updates about our latest shop and special offers.
                  </li>
                  <li>
                    <div className="search-input footer__search-input">
                      <input
                        type="text"
                        name="search"
                        placeholder="Enter Your E-mail"
                      />
                      <span>SUBSCRIBE</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
