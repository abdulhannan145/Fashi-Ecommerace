import React from "react";
import { Link } from "react-router-dom";
const Deal = () => {
  return (
    <>
      <section id="deal" className="deal">
        <div className="container">
          <div className="deal__content">
            <div className="section-heading">
              <h2 className="section-heading__heading">Deal Of The Week</h2>
            </div>
            <div className="deal__desc">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, autem natus. Corrupti facere exercitationem ex
                accusantium? In!
              </p>
              <div className="price-w-desc">
                <p className="price-primary">$35.00</p>
                <span className="description">/HandBag</span>
              </div>
            </div>
            <Link to="/products">
              <button className="btn-primary">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deal;
