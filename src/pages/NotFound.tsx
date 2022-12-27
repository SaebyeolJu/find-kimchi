import React from "react";
import NavigateBtn from "../components/NavigateBtn";

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <div className="not-found--title">
          <h1>4</h1>
          <img className="not-found__img" src="/img/logo.svg" alt="logo__img" />
          <h1>4</h1>
        </div>

        <h2>잘못된 경로입니다!</h2>
        <NavigateBtn btn_txt="처음으로" btn_dest="" />
      </div>
    </div>
  );
};

export default NotFound;
