import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
