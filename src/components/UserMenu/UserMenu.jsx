import { PiHandWaving } from "react-icons/pi";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className={css.greeting}>
        <p>Hello, {user.name}</p>
        <PiHandWaving />
      </div>
      <button type="button">Log Out</button>
    </>
  );
}

export default UserMenu;
