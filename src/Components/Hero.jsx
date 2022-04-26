import React from "react";

const Hero = () => {
  return (
    <>
      <div className="main">
        <section className="hero">
          <div className="container hero__container">
            <div className="">
              <p className="hero__content__category">BAG.KIDS</p>
              <h1 className="hero__content__heading">Black friday</h1>
              <p className="hero__content__desc description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis exercitationem in blanditiis nemo vel deleniti?
              </p>
              <a href="/products">
                <button className="btn-primary">SHOP NOW</button>
              </a>
            </div>
          </div>
          <div className="badge rotate-90-cw">
            <div className="badge__content">
              <p>SALE 50%</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
