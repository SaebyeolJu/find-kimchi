import Confetti from "react-confetti";
import useWindowSize from "../function/useWindowSize";

/**
 * @return - 검색해서 없는 김치를 찾아내거나 game에서 5점 이상 받을 시 실행
 */
export default () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};
