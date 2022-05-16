import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <title>Multipurpose</title>

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i%7CRajdhani:400,600,700"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="assets/css/loader/loaders.css" />
        <link
          rel="stylesheet"
          href="assets/css/font-awesome/font-awesome.css"
        />
        <link rel="stylesheet" href="assets/css/bootstrap.css" />
        <link rel="stylesheet" href="assets/css/aos/aos.css" />
        <link rel="stylesheet" href="assets/css/swiper/swiper.css" />
        <link rel="stylesheet" href="assets/css/lightgallery.min.css" />

        <link rel="stylesheet" href="assets/css/style.css" />

        <link rel="stylesheet" href="assets/css/responsive.css" />
      </Head>

      <div className="css-loader">
        <div className="loader-inner line-scale d-flex align-items-center justify-content-center"></div>
      </div>

      <header className="position-absolute w-100">
        <div className="container">
          <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
            <div className="contact">
              <a href="tel:+1234567890" className="tel">
                <i className="fa fa-phone" aria-hidden="true"></i>+1234567890
              </a>
              <a href="mailto:info@yourmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                info@yourmail.com
              </a>
            </div>
            <nav className="d-flex aic">
              <a href="#" className="login">
                <i className="fa fa-user" aria-hidden="true"></i>Login
              </a>
              <ul className="nav social d-none d-md-flex">
                <li>
                  <a href="https://www.facebook.com/fh5co" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/logo.png" alt="Multipurpose" />
            </a>
            <div className="group d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="login-icon d-sm-none" href="#">
                <i className="fa fa-user"></i>
              </a>
              <a className="cart" href="#">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
            <a className="search-icon d-none d-md-block" href="#">
              <i className="fa fa-search"></i>
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-Link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-Link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-Link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-Link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-Link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-Link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form
                className="bg-white search-form"
                method="get"
                id="searchform"
              >
                <div className="input-group">
                  <input
                    className="field form-control"
                    id="s"
                    name="s"
                    type="text"
                    placeholder="Search"
                  />
                  <span className="input-group-btn">
                    <input
                      className="submit btn btn-primary"
                      id="searchsubmit"
                      name="submit"
                      type="submit"
                      value="Search"
                    />
                  </span>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>

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

      <section className="cta" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
            <div className="content" data-aos="fade-right" data-aos-delay="200">
              <h2>FOR BUILDING THE MODERN WEBSITE</h2>
              <p>
                Packed with all the goodies you can get, Kallyas is our flagship
                premium template.
              </p>
            </div>
            <div
              className="subscribe-btn"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <a href="#" className="btn btn-primary">
                Join Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="title text-center">
            <h6>Our Speakers</h6>
            <h1 className="title-blue">Why Choose Us</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="400"
                >
                  <img
                    className="mr-4"
                    src="assets/images/service1.png"
                    alt="Web Development"
                  />
                  <div className="media-body">
                    <h5>Web Development</h5>
                    Donec volutpat tincidunt neque, vitae lobortis libero mattis
                    sed tempus.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="600"
                >
                  <img
                    className="mr-4"
                    src="assets/images/service2.png"
                    alt="Web Development"
                  />
                  <div className="media-body">
                    <h5>Testing for perfection</h5>
                    Donec volutpat tincidunt neque, vitae lobortis libero mattis
                    sed tempus.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="800"
                >
                  <img
                    className="mr-4"
                    src="assets/images/service3.png"
                    alt="Web Development"
                  />
                  <div className="media-body">
                    <h5>Discussion of the idea</h5>
                    Donec volutpat tincidunt neque, vitae lobortis libero mattis
                    sed tempus.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="400"
                >
                  <img
                    className="mr-4"
                    src="assets/images/service4.png"
                    alt="Web Development"
                  />
                  <div className="media-body">
                    <h5>Modern style</h5>
                    Donec volutpat tincidunt neque, vitae lobortis libero mattis
                    sed tempus.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="600"
                >
                  <img
                    className="mr-4"
                    src="assets/images/service1.png"
                    alt="Web Development"
                  />
                  <div className="media-body">
                    <h5>Web Development</h5>
                    Donec volutpat tincidunt neque, vitae lobortis libero mattis
                    sed tempus.
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="800"
                >
                  <img
                    className="mr-4"
                    src="assets/images/service5.png"
                    alt="Web Development"
                  />
                  <div className="media-body">
                    <h5>Elaboration of the core</h5>
                    Donec volutpat tincidunt neque, vitae lobortis libero mattis
                    sed tempus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="title">
                <h6 className="title-primary">about Tamplate</h6>
                <h1 className="title-blue">
                  a rich featured, epic and premium work.
                </h1>
              </div>
              <p>
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the generators on the Internet.
              </p>
              <div className="media-element d-flex justify-content-between">
                <div className="media">
                  <i className="fa fa-magic mr-4"></i>
                  <div className="media-body">
                    <h5>any offer</h5>
                    New York, United States
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-magic mr-4"></i>
                  <div className="media-body">
                    <h5>any offer</h5>
                    New York, United States
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-primary">
                See More
              </a>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="featured-img">
                <img
                  className="featured-big"
                  src="assets/images/featured-img1.jpg"
                  alt="Featured 1"
                />
                <img
                  className="featured-small"
                  src="assets/images/featured-img2.jpg"
                  alt="Featured 2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-posts">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="post-content text-sm-right">
                  {/*<time datetime="2019-04-06T13:53">15 Oct, 2019</time>*/}
                  <h3>
                    <a href="#">Proudly for us to build stylish</a>
                  </h3>
                  <p>
                    <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                    <a href="#">E-commerce</a>
                  </p>
                  <a className="post-btn" href="#">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
                <div className="post-thumb">
                  <img
                    className="img-fluid"
                    src="assets/images/post1.jpg"
                    alt="Post 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="post-thumb">
                  <img
                    className="img-fluid"
                    src="assets/images/post2.jpg"
                    alt="Post 1"
                  />
                </div>
                <div className="post-content">
                  {/*<time datetime="2019-04-06T13:53">15 Oct, 2019</time>*/}
                  <h3>
                    <a href="#">Remind me to water the plants</a>
                  </h3>
                  <p>
                    <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                    <a href="#">E-commerce</a>
                  </p>
                  <a className="post-btn" href="#">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="post-content text-sm-right">
                  {/*<time datetime="2019-04-06T13:53">15 Oct, 2019</time>*/}
                  <h3>
                    <a href="#">Add apples to the grocery list</a>
                  </h3>
                  <p>
                    <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                    <a href="#">E-commerce</a>
                  </p>
                  <a className="post-btn" href="#">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
                <div className="post-thumb">
                  <img
                    className="img-fluid"
                    src="assets/images/post3.jpg"
                    alt="Post 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-rpost d-sm-flex align-items-center"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                <div className="post-thumb">
                  <img
                    className="img-fluid"
                    src="assets/images/post4.jpg"
                    alt="Post 1"
                  />
                </div>
                <div className="post-content">
                  {/*<time datetime="2019-04-06T13:53">15 Oct, 2019</time>*/}
                  <h3>
                    <a href="#">Make it warmer downstairs</a>
                  </h3>
                  <p>
                    <a href="#">Seanding</a>, <a href="#">Website</a>,{" "}
                    <a href="#">E-commerce</a>
                  </p>
                  <a className="post-btn" href="#">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-primary">
              See More
            </a>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <div className="row">
            <div
              className="offset-xl-1 col-xl-6"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="title">
                <h6 className="title-primary">about Tamplate</h6>
                <h1>a rich featured, epic and premium work.</h1>
              </div>
              <p>
                Suspendisse facilisis commodo lobortis. Nullam mollis lobortis
                ex vel faucibus. Proin nec viverra turpis. Nulla eget justo
                scelerisque, pretium purus vel, congue libero. Suspendisse
                potenti.
              </p>
              <h5>Web Design and Development</h5>
              <ul className="list-unstyled">
                <li>Web Content</li>
                <li>Website other</li>
                <li>Fashion</li>
                <li>Moblie and Tablette</li>
              </ul>
            </div>
            <div className="col-xl-5 gallery">
              <div className="row no-gutters h-100" id="lightgallery">
                <a
                  href="https://lorempixel.com/600/400/"
                  className="w-50 h-100 gal-img"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="400"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/gallery1.jpg"
                    alt="Gallery Image"
                  />
                  <i className="fa fa-caret-right"></i>
                </a>
                <a
                  href="https://lorempixel.com/600/400/"
                  className="w-50 h-50 gal-img"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="600"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/gallery2.jpg"
                    alt="Gallery Image"
                  />
                  <i className="fa fa-caret-right"></i>
                </a>
                <a
                  href="https://lorempixel.com/600/400/"
                  className="w-50 h-50 gal-img gal-img3"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="600"
                >
                  <img
                    className="img-fluid"
                    src="assets/images/gallery3.jpg"
                    alt="Gallery Image"
                  />
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-table">
        <div className="container">
          <div className="title text-center">
            <h6 className="title-primary">Our prices</h6>
            <h1 className="title-blue">Price Table List</h1>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Starter</h2>
                <p className="desc">Here goes some description</p>
                <p className="price">$39.00</p>
                <p>Create excepteur sint occaecat cupidatat non proident</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
                <svg viewBox="0 0 170 193">
                  <path
                    fillRule="evenodd"
                    fill="rgb(238, 21, 21)"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Starter</h2>
                <p className="desc">Here goes some description</p>
                <p className="price">$39.00</p>
                <p>5GB Storage Space</p>
                <p>20GB Monthly Bandwidth</p>
                <p>My SQL Databases</p>
                <p>100 Email Account</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
                <svg viewBox="0 0 170 193">
                  <path
                    fillRule="evenodd"
                    fill="rgb(238, 21, 21)"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="single-pricing text-center"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
                <span>Monthly</span>
                <h2>Starter</h2>
                <p className="desc">Here goes some description</p>
                <p className="price">$39.00</p>
                <p>Create excepteur sint occaecat cupidatat non proident</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
                <svg viewBox="0 0 170 193">
                  <path
                    fillRule="evenodd"
                    fill="rgb(238, 21, 21)"
                    d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-and-clients">
        <div className="container">
          <div className="testimonials">
            <div className="swiper-container test-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide text-center">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                      <div
                        className="test-img"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-offset="0"
                      >
                        <img
                          src="assets/images/test1.png"
                          alt="Testimonial 1"
                        />
                      </div>
                      <h5
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        John
                      </h5>
                      <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        UI/UX Designer
                      </span>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        Ash's tactics and books have helped me a lot in my
                        understanding on how social media advertising works.I
                        can say that he is one of the best development
                        professionals i have dealt with so far. His experience
                        is great and he is such a great and pleasant person to
                        work with as he understands what you are
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide text-center">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                      <div
                        className="test-img"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-offset="0"
                      >
                        <img
                          src="assets/images/test1.png"
                          alt="Testimonial 1"
                        />
                      </div>
                      <h5
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        John
                      </h5>
                      <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        UI/UX Designer
                      </span>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        Ash's tactics and books have helped me a lot in my
                        understanding on how social media advertising works.I
                        can say that he is one of the best development
                        professionals i have dealt with so far. His experience
                        is great and he is such a great and pleasant person to
                        work with as he understands what you are
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide text-center">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-10">
                      <div
                        className="test-img"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-offset="0"
                      >
                        <img
                          src="assets/images/test1.png"
                          alt="Testimonial 1"
                        />
                      </div>
                      <h5
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        John
                      </h5>
                      <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        UI/UX Designer
                      </span>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="600"
                        data-aos-offset="0"
                      >
                        Ash's tactics and books have helped me a lot in my
                        understanding on how social media advertising works.I
                        can say that he is one of the best development
                        professionals i have dealt with so far. His experience
                        is great and he is such a great and pleasant person to
                        work with as he understands what you are
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="test-pagination"></div>
            </div>
          </div>
          <div
            className="clients"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            <div className="swiper-container clients-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="assets/images/client1.png" alt="Client 1" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/client2.png" alt="Client 2" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/client3.png" alt="Client 3" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/client4.png" alt="Client 4" />
                </div>
                <div className="swiper-slide">
                  <img src="assets/images/client5.png" alt="Client 5" />
                </div>
              </div>
              <div className="test-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta cta2" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
            <div className="content" data-aos="fade-right" data-aos-delay="200">
              <h2>FOR BUILDING THE MODERN WEBSITE</h2>
              <p>
                Packed with all the goodies you can get, Kallyas is our flagship
                premium template.
              </p>
            </div>
            <div
              className="subscribe-btn"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <a href="#" className="btn btn-primary">
                Join Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div
                  className="single-widget contact-widget"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <h6 className="widget-tiltle">&nbsp;</h6>
                  <p>
                    By subscribing to our mailing list you will always be update
                    with the latest news from us.
                  </p>
                  <div className="media">
                    <i className="fa fa-map-marker"></i>
                    <div className="media-body ml-3">
                      <h6>Address</h6>
                      Level 13, 2 Elizabeth St,
                      <br />
                      Melbourne, Victoria 3000 Australia
                    </div>
                  </div>
                  <div className="media">
                    <i className="fa fa-envelope-o"></i>
                    <div className="media-body ml-3">
                      <h6>Have any questions?</h6>
                      <a href="mailto:support@steelthemes.com">
                        Support@Steelthemes.com
                      </a>
                    </div>
                  </div>
                  <div className="media">
                    <i className="fa fa-phone"></i>
                    <div className="media-body ml-3">
                      <h6>Call us and Hire us</h6>
                      <a href="tel:+610791803458"> +61 (0) 7 9180 3458</a>
                    </div>
                  </div>
                  <div className="media">
                    <i className="fa fa-fax"></i>
                    <div className="media-body ml-3">
                      <h6>Fax</h6>
                      <a href="fax:911889047521432">(91) 188904752 1432</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div
                  className="single-widget twitter-widget"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h6 className="widget-tiltle">Fresh Tweets</h6>
                  <div className="media">
                    <i className="fa fa-twitter"></i>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">@Themes,</a> Html Version Out Now
                      </h6>
                      <span>10 Mins Ago</span>
                    </div>
                  </div>
                  <div className="media">
                    <i className="fa fa-twitter"></i>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">@Envato,</a> the best selling item of the
                        day!
                      </h6>
                      <span>20 Mins Ago</span>
                    </div>
                  </div>
                  <div className="media">
                    <i className="fa fa-twitter"></i>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">@Collis,</a> We Planned to Update the Enavto
                        Author Payment Method Soon!
                      </h6>
                      <span>10 Mins Ago</span>
                    </div>
                  </div>
                  <div className="media">
                    <i className="fa fa-twitter"></i>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">@SteelThemes,</a> Html Version Out Now
                      </h6>
                      <span>15 Mins Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div
                  className="single-widget recent-post-widget"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h6 className="widget-tiltle">Latest Updates</h6>
                  <div className="media">
                    <a className="rcnt-img" href="#">
                      <img
                        src="assets/images/rcnt-post1.png"
                        alt="Recent Post"
                      />
                    </a>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">An engaging</a>
                      </h6>
                      <p>
                        <i className="fa fa-user"></i>Mano{" "}
                        <i className="fa fa-eye"></i> 202 Views
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <a className="rcnt-img" href="#">
                      <img
                        src="assets/images/rcnt-post2.png"
                        alt="Recent Post"
                      />
                    </a>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">
                          Statistics and analysis. The key to succes.
                        </a>
                      </h6>
                      <p>
                        <i className="fa fa-user"></i>Rosias{" "}
                        <i className="fa fa-eye"></i> 20 Views
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <a className="rcnt-img" href="#">
                      <img
                        src="assets/images/rcnt-post3.png"
                        alt="Recent Post"
                      />
                    </a>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">
                          Envato Meeting turns into a photoshooting.
                        </a>
                      </h6>
                      <p>
                        <i className="fa fa-user"></i>Kien{" "}
                        <i className="fa fa-eye"></i> 74 Views
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <a className="rcnt-img" href="#">
                      <img
                        src="assets/images/rcnt-post4.png"
                        alt="Recent Post"
                      />
                    </a>
                    <div className="media-body ml-3">
                      <h6>
                        <a href="#">An engaging embedded the video posts</a>
                      </h6>
                      <p>
                        <i className="fa fa-user"></i>Robert{" "}
                        <i className="fa fa-eye"></i> 48 Views
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div
                  className="single-widget tags-widget"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <h6 className="widget-tiltle">Popular Tags</h6>
                  <a href="#">Amazing</a>
                  <a href="#">Design</a>
                  <a href="#">Photoshop</a>
                  <a href="#">Art</a>
                  <a href="#">Wordpress</a>
                  <a href="#">jQuery</a>
                </div>
                <div
                  className="single-widget subscribe-widget"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <h6 className="widget-tiltle">Subscribe us</h6>
                  <p>
                    Sign up for our mailing list to get latest updates and
                    offers
                  </p>
                  <form className="" method="get">
                    <div className="input-group">
                      <input
                        className="field form-control"
                        name="subscribe"
                        type="email"
                        placeholder="Email Address"
                      />
                      <span className="input-group-btn">
                        <button type="submit" name="submit-mail">
                          <i className="fa fa-check"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                  <p>We respect your privacy</p>
                  <ul className="nav social-nav">
                    <li>
                      <a href="https://www.facebook.com/fh5co" target="_blank">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="foot-note">
          <div className="container">
            <div className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
              <p className="mb-0" data-aos="fade-right" data-aos-offset="0">
                &copy; 2019 All Rights Reserved. Design by{" "}
                <a
                  href="https://freehtml5.co/multipurpose"
                  target="_blank"
                  className="fh5-Link"
                >
                  FreeHTML5.co
                </a>
                .
              </p>
              <p className="mb-0" data-aos="fade-left" data-aos-offset="0">
                <a href="#">Terms Of Use</a>
                <a href="#">Privacy and Security Statement</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <script src="assets/js/jquery-3.3.1.js"></script>

      <script src="assets/js/bootstrap.bundle.js"></script>
      <script src="assets/js/loaders.css.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/swiper.min.js"></script>
      <script src="assets/js/lightgallery-all.min.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default Home;
