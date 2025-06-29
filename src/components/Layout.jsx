import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loader from "./Loader/Loader";

function Layout({ children }) {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}

export default Layout;

// fallback внутри Suspense - это обязательный prop, если я ничего не хочу отображать, то его значение просто ставлю null
