import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
    <div className={css.gap}>
      <NavLink to="/" className={getActiveLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getActiveLinkClass}>
          Contacts
        </NavLink>
      )}
    </div>
  );
}

export default Navigation;
