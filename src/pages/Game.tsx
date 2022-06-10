import React, { useState } from "react";
import AnswerCard from "../components/AnswerCard";
import AnswerResultCard from "../components/AnswerResultCard";

const Game = () => {
  const [gameCnt, setGameCnt] = useState(1);
  // const [score, setScore] = useState(0);
  // const [answer, setAnswer] = useState();

  // const handleAnswer = () => {
  // setAnswer("");
  // };

  return (
    <div className="container">
      <h1>{gameCnt} / 10</h1>
      <img
        className="game__img"
        src="http://www.lampcook.com/wi_files/food_material/41.jpg"
        alt="game__img"
      />
      <h2>뉴그린 김치</h2>
      <div className="answer">
        <AnswerCard isCorrect={true} />
        <AnswerCard isCorrect={false} />
      </div>
    </div>
  );
};

export default Game;
