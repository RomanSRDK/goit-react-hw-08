import { PiHandWaving } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <div className={css.greeting}>
        <p>Hello, {user.name}</p>
        <PiHandWaving />
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </button>
    </>
  );
}

export default UserMenu;
