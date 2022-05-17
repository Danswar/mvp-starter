import React from "react";

const Header = () => {
  return (
    <header className="position-absolute w-100">
      <div className="container">
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
            <form className="bg-white search-form" method="get" id="searchform">
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
  );
};

export default Header;
