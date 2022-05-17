import React from "react";

export type LinkProps = {
  label: string;
  href: string;
};

const Link = ({ label, href }: LinkProps) => (
  <li className="nav-item">
    <a className="nav-Link" href={href}>
      {label}
    </a>
  </li>
);

const mockedLinksResource: LinkProps[] = [
  { label: "Home", href: "#" },
  { label: " About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Shop", href: "#" },
  { label: " Contact Us", href: "#" }
];

const getNavBarLinks = () => mockedLinksResource;

const NavBar = () => {
  const navBarLinks = getNavBarLinks().map((props) => <Link {...props} />);

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
            <ul className="navbar-nav">{navBarLinks}</ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
