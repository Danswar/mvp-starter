import React from "react";
import NavBarLink, { LinkProps } from "../../components/NavLink";

const NavBar = ({ navLinks }: { navLinks: LinkProps[] }) => {
  const links = navLinks.map((props) => <NavBarLink {...props} />);

  return (
    <header className="position-absolute w-100">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="Multipurpose" />
          </a>
          <div className="group d-flex align-items-center">
            <a className="login-icon d-sm-none" href="#">
              <i className="fa fa-user"></i>
            </a>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">{links}</ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
