import classes from "../style/Nav.module.css";
import Account from "./Account";
import logo from "../assets/html/images/logo-bg.png";
const Nav = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
};

export default Nav;
