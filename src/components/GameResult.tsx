import NavigateBtn from "./NavigateBtn";

import Confetti from "react-confetti";
import useWindowSize from "../function/useWindowSize";

interface GameResultProps {
  score: Number;
  resetGame: Function;
}

/**
 *
 * @param score - 게임 점수
 * @param resetGame - 게임 재시작을 위한 함수. 부모 컴포턴트에서 게임관련 상태들을 리셋함
 */
const GameResult = ({ score, resetGame }: GameResultProps) => {
  const { width, height } = useWindowSize();
  return (
    <div className="game-result">
      <>
        {/* 점수 5점 이상이면 confetti 효과를 넣음 */}
        {score > 5 ? (
          <Confetti width={width} height={height} tweenDuration={1000} />
        ) : null}
      </>
      <h1 className={["txt-white"].join(" ")}>게임 결과</h1>
      <h2 className={["txt-white"].join(" ")}>{score}점</h2>
      <>
        <button
          className={["btn--second", "txt-white"].join(" ")}
          onClick={() => resetGame()}
        >
          다시 시작하기
        </button>
        <NavigateBtn btn_txt="처음으로" btn_type="btn--prime" btn_dest="" />
      </>
    </div>
  );
};

export default GameResult;
