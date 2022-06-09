import React from "react";
import * as AiIcons from "react-icons/ai";

const ReportsField = (props: any) => {
  return (
    <>
      <div className="reports__label-field">
        <AiIcons.AiOutlineInfoCircle className="reports__Info-icon" />
        <p className="reports__label">{props.label}</p>
      </div>
      <input className="reports__input" name="메모" type="text" />
    </>
  );
};

export default ReportsField;
