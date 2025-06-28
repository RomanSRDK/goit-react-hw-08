import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

function AuthNav() {
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
    <div className={css.gap}>
      <NavLink to="/register" className={getActiveLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getActiveLinkClass}>
        Log In
      </NavLink>
    </div>
  );
}

export default AuthNav;
