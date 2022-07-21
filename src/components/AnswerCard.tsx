import React from "react";
import * as MdIcons from "react-icons/md";
import * as BrIcons from "react-icons/gr";

const AnswerCard = (props: any) => {
  return (
    <div className="answer__card">
      {props.isCorrect ? (
        <>
          <MdIcons.MdOutlineCircle
            className={["answer__icon", "bg-dark-blue", "txt-white"].join(" ")}
          />
          <p className={["txt-white"].join(" ")}>있을까요?</p>
        </>
      ) : (
        <>
          <BrIcons.GrClose
            className={["answer__icon", "bg-red", "txt-white"].join(" ")}
          />
          <p className={["txt-white"].join(" ")}>없을까요?</p>
        </>
      )}
    </div>
  );
};

export default AnswerCard;
