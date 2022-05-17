export type LinkProps = {
  label: string;
  href: string;
};

const NavBarLink = ({ label, href }: LinkProps) => (
  <li className="nav-item">
    <a className="nav-Link" href={href}>
      {label}
    </a>
  </li>
);

export default NavBarLink;
