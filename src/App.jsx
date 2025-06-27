import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import LoginForm from "./components/LoginForm/LoginForm";
import UserMenu from "./components/UserMenu/UserMenu";
import { selectLoading } from "./redux/contacts/slice";
import { BarLoader } from "react-spinners";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import ContactsPage from "./pages/ContactsPage";
import AppBar from "./components/AppBar/AppBar";

function App() {
  const dispatch = useDispatch();
  const loaderSpinner = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts()); //.unwrap() => даёт нам доступ к Promise нашей операции
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <LoginForm /> */}
      {/* <UserMenu /> */}
      {/* <h1>Phonebook</h1> */}
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      {/* {loaderSpinner ? <BarLoader color="#3fc71e" /> : <ContactList />} */}
    </>
  );
}

export default App;
