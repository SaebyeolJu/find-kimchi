import Confetti from "react-confetti";
import useWindowSize from "../function/useWindowSize";

import NavigateBtn from "../components/NavigateBtn";
import ReportLink from "../components/ReportLink";

interface searchProps {
  searchWord: string;
}

/**
 *
 * @param searchWord - 사용자가 검색한 단어
 * @returns - 검색시 나오는 결과가 없을시에 나오는 페이지. Confetti 효과 포함
 */
const NoResult = ({ searchWord }: searchProps) => {
  const { width, height } = useWindowSize();

  return (
    <div className="container">
      <Confetti width={width} height={height} tweenDuration={1000} />
      <h1 className="txt-white">{searchWord} 김치는 없습니다!</h1>
      <p className="txt-white">축하합니다! 없는 김치를 찾아냈습니다!</p>
      <p className="txt-white">이 기회에 담아보는건 어떨까요?</p>
      <NavigateBtn btn_txt="처음으로" btn_type="btn--prime" btn_dest="" />
      <div className="report-box">
        <p className="txt-white">잘못된 정보라면?</p>
        <ReportLink />
      </div>
    </div>
  );
};

export default NoResult;
