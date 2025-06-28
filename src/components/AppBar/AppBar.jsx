import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./AppBar.module.css";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav className={css.nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
    </>
  );
}

export default AppBar;
