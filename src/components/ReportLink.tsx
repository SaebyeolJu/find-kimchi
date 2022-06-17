import React from "react";
import { useNavigate } from "react-router-dom";

const ReportLink = () => {
  let navigate = useNavigate();
  return (
    <a
      onClick={() => {
        navigate("/report");
      }}
    >
      제보하기
    </a>
  );
};

export default ReportLink;
