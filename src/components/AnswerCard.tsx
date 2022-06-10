import React from "react";
import * as BsIcons from "react-icons/bs";
import * as BrIcons from "react-icons/gr";

const AnswerCard = (props: any) => {
  return (
    <div className="answer-card">
      {props.isCorrect ? (
        <>
          <BsIcons.BsCircle className="answer__icon bg-red" /> <p>있을까요?</p>
        </>
      ) : (
        <>
          <BrIcons.GrClose className="answer__icon bg-red" />
          <p>없을까요?</p>
        </>
      )}
    </div>
  );
};

export default AnswerCard;
