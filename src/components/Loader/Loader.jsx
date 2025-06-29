import { BarLoader } from "react-spinners";

function Loader() {
  return (
    <>
      <div
        style={{
          display: "block",
          margin: "0 auto",
        }}
      >
        <BarLoader color="#e52b50" />
      </div>
    </>
  );
}

export default Loader;
