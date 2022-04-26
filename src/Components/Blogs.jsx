import React from "react";

const Blogs = () => {
  return (
    <>
      <section id="blog" className="blog main-main">
        <div className="container">
          <div className="section-heading blog__heading">
            <h2 className="section-heading__heading">From The Blog</h2>
          </div>
          <div className="blog__content">
            <div className="blog-card">
              <div className="blog-card__img"></div>
              <div className="blog-card__date">
                <span>
                  <i className="blog-card__date__icon fa fa-calendar"></i>
                  <span>May, 4 2022</span>
                </span>
                <span>
                  <i className="blog-card__date__icon fa fa-comment"></i>
                  <span>5</span>
                </span>
              </div>
              <h3 className="blog-card__heading">
                The Best Street Style From London Fashion Week
              </h3>
              <p className="blog-card__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                earum perferendis est rerum! Corporis, odio.
              </p>
            </div>
            <div className="blog-card">
              <div className="blog-card__img"></div>
              <div className="blog-card__date">
                <span>
                  <i className="blog-card__date__icon fa fa-calendar"></i>
                  <span>May, 4 2022</span>
                </span>
                <span>
                  <i className="blog-card__date__icon fa fa-comment"></i>
                  <span>5</span>
                </span>
              </div>
              <h3 className="blog-card__heading">
                The Best Street Style From London Fashion Week
              </h3>
              <p className="blog-card__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                earum perferendis est rerum! Corporis, odio.
              </p>
            </div>
            <div className="blog-card">
              <div className="blog-card__img"></div>
              <div className="blog-card__date">
                <span>
                  <i className="blog-card__date__icon fa fa-calendar"></i>
                  <span>May, 4 2022</span>
                </span>
                <span>
                  <i className="blog-card__date__icon fa fa-comment"></i>
                  <span>5</span>
                </span>
              </div>
              <h3 className="blog-card__heading">
                The Best Street Style From London Fashion Week
              </h3>
              <p className="blog-card__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                earum perferendis est rerum! Corporis, odio.
              </p>
            </div>
          </div>
          <div className="benifits">
            <div className="benifits__item">
              <i className="fa fa-truck benifits__item__icon"></i>
              <span className="benifits__item__desc">
                <h4>FREE SHIPPING</h4>
                <p>For all orders over $99</p>
              </span>
            </div>
            <div className="benifits__item">
              <i className="fa fa-stopwatch benifits__item__icon"></i>
              <span className="benifits__item__desc">
                <h4>DELIVERY ON TIME</h4>
                <p>If good have problems</p>
              </span>
            </div>
            <div className="benifits__item">
              <i className="fa fa-truck benifits__item__icon"></i>
              <span className="benifits__item__desc">
                <h4>SECURE PAYMENT</h4>
                <p>100% secure payment</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
