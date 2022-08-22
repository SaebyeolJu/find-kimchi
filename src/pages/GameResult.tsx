import React from "react";
import HomeButton from "../components/HomeButton";

const GameResult = () => {
  const gameReset = () => {
    window.location.reload();
  };
  return (
    <div>
      게임 결과
      {/* 게임 다시 시작하려면 해야하는 것
      1. 게임 score를 0으로 리셋
      2. gameCnt를 1로 리셋
      -> 다시 시작하기 버튼을 누를 때 리셋 
      -> 부모 component(game 페이지)에 gameCnt랑 score 초기화해서 보내야함
      */}
      <button onClick={gameReset}>다시 시작하기</button>
      <HomeButton />
    </div>
  );
};

export default GameResult;
