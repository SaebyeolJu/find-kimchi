import Confetti from "react-confetti";
import useWindowSize from "../function/useWindowSize";

export default (score: number) => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
};
