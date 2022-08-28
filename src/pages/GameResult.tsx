import HomeButton from "../components/HomeButton";
import Confetti from "react-confetti";
import useWindowSize from "../function/useWindowSize";

const GameResult = (props) => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <>
        {props.score > 5 ? (
          <Confetti width={width} height={height} tweenDuration={1000} />
        ) : null}
      </>
      <h1 className={["txt-white"].join(" ")}>게임 결과</h1>
      <h2 className={["txt-white"].join(" ")}>{props.score}점</h2>
      <>
        <button
          className={["btn", "txt-white"].join(" ")}
          onClick={() => props.resetGame()}
        >
          다시 시작하기
        </button>
        <HomeButton />
      </>
    </div>
  );
};

export default GameResult;
