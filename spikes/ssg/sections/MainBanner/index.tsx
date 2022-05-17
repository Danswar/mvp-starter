import React from "react";

const MainBanner = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-md-1 col-md-11">
            <div className="swiper-container hero-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide slide-content d-flex align-items-center">
                  <div className="single-slide">
                    <h1 data-aos="fade-right" data-aos-delay="200">
                      Creative
                      <br /> Multipurpose websites
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                      Crafted by innovative creators for Expecting Peoples’s
                      predefined dummy text
                      <br /> chunks as necessary, making this the first.
                    </p>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn btn-primary"
                    >
                      See More
                    </a>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn btn-primary"
                    >
                      Get Now
                    </a>
                  </div>
                </div>
                <div className="swiper-slide slide-content d-flex align-items-center">
                  <div className="single-slide">
                    <h1 data-aos="fade-right" data-aos-delay="200">
                      Creative
                      <br /> Multipurpose websites
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                      Crafted by innovative creators for Expecting Peoples’s
                      predefined dummy text
                      <br /> chunks as necessary, making this the first.
                    </p>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn btn-primary"
                    >
                      See More
                    </a>
                    <a
                      data-aos="fade-right"
                      data-aos-delay="900"
                      href="#"
                      className="btn btn-primary"
                    >
                      Get Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="arr-left">
          <i className="fa fa-angle-left"></i>
        </span>
        <span className="arr-right">
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
      <div className="texture"></div>
      <div className="diag-bg"></div>
    </section>
  );
};

export default MainBanner;
