import NavigateBtn from "./NavigateBtn";
import Table from "./Table/GameResultTable";

import Confetti from "react-confetti";
import useWindowSize from "../function/useWindowSize";

interface GameResultObject {
  gameIdx: string;
  name: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: string;
}

interface GameResultData {
  score: number;
  gameResults: GameResultObject[];
  handleReset: Function;
}

/**
 * @description - 점수를 보여주고, 게임을 재시작할 수 있는 버튼과 게임 결과를 저장한 결과 테이블을 보여주는 컴포넌트
 * @param score - 게임 점수
 * @param handleReset - 게임 재시작을 위한 함수. 부모 컴포턴트에서 게임관련 상태들을 리셋함
 * @param gameResults - 게임 결과를 저장하는 배열
 */
const GameResult: React.FC<GameResultData> = ({
  score,
  gameResults,
  handleReset,
}: GameResultData) => {
  const { width, height } = useWindowSize();
  return (
    <div className="game-result">
      <>
        {/* 점수 5점 이상이면 confetti 효과를 넣음 */}
        {score > 5 ? (
          <Confetti width={width} height={height} tweenDuration={1000} />
        ) : null}
      </>
      <h1 className="game__txt">{`${score}점`}</h1>
      <Table gameResult={JSON.stringify(gameResults)} />
      <div className="btn-container">
        <button className={["btn"].join(" ")} onClick={() => handleReset()}>
          다시 시작하기
        </button>
        <NavigateBtn btn_txt="처음으로" btn_dest="" />
      </div>
    </div>
  );
};

export default GameResult;
