import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

function AppBar() {
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={getActiveLinkClass}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={getActiveLinkClass}>
            Contacts
          </NavLink>
          <NavLink to="/register" className={getActiveLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={getActiveLinkClass}>
            Log In
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default AppBar;
