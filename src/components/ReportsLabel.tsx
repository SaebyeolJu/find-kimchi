import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

const ReportsLabel = (props: any) => {
  return (
    <>
      <div className="reports__label-field">
        <AiIcons.AiOutlineInfoCircle className="reports__Info-icon" />
        <p className="reports__label">{props.label}</p>
      </div>
    </>
  );
};

export default ReportsLabel;
