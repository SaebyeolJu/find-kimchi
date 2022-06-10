import React from "react";
import * as BsIcons from "react-icons/bs";
import * as BrIcons from "react-icons/gr";

const QuizResult = (props: any) => {
  return (
    <div className="answer__card">
      {props.isCorrect ? (
        <BsIcons.BsCircle className="answer__icon" />
      ) : (
        <BrIcons.GrClose className="answer__icon" />
      )}
      {props.isCorrect ? <p>있습니다!</p> : <p>없습니다!</p>}
      <button className="btn" type="submit">
        다음
      </button>
      <p>이의 / 제보하기</p>
    </div>
  );
};

export default QuizResult;
