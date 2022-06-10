import React, { useState } from "react";
import AnswerCard from "../components/AnswerCard";
import QuizResult from "../components/QuizResult";

const Game = () => {
  const [gameCnt, setGameCnt] = useState(1);

  return (
    <div className="container">
      <h1>{gameCnt} / 10</h1>
      <img
        className="search__img"
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
