import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader color={"#D7022B"} />
    </div>
  );
};

export default Spinner;
