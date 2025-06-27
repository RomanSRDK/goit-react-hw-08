import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
    <>
      <header>
        <nav className={css.nav}>
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
          <div className={css.gap}>
            <NavLink to="/register" className={getActiveLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={getActiveLinkClass}>
              Log In
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default AppBar;
