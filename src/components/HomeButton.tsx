import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  let navigate = useNavigate();

  return (
    <button
      className="btn bg-red"
      onClick={() => {
        navigate("/");
      }}
    >
      처음으로
    </button>
  );
};

export default HomeButton;
