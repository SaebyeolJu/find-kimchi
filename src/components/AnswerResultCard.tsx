import React from "react";
import * as MdIcons from "react-icons/md";
import * as BrIcons from "react-icons/gr";

import ReportLink from "./ReportLink";

const AnswerResultCard = (props: any) => {
  return (
    <div className="result__card">
      {props.isCorrect ? (
        <MdIcons.MdOutlineCircle className="answer__icon bg-red" />
      ) : (
        <BrIcons.GrClose className="answer__icon" />
      )}
      {props.isCorrect ? <p>있습니다!</p> : <p>없습니다!</p>}
      <button className="btn" type="submit">
        다음
      </button>
      <ReportLink />
    </div>
  );
};

export default AnswerResultCard;
