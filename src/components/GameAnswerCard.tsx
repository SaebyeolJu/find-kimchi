import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";

interface AnswerCardProps {
  isCorrect: boolean;
  handleAnswerBtnClick: Function;
}

/**
 *
 * @param isCorrect : 참 / 거짓 카드 구분을 위함
 * @param handleAnswerBtnClick : 사용자 정답처리 함수. 부모 component에서 쓰이는 state들을 관리하기 위한 함수로 부모 component에서 정의되어 있음
 * @return - O / X 선택지 카드 component
 */
const AnswerCard = ({ isCorrect, handleAnswerBtnClick }: AnswerCardProps) => {
  return (
    <div
      className="answer__card"
      onClick={() => handleAnswerBtnClick(isCorrect.toString())}
    >
      {isCorrect ? (
        <>
          <MdIcons.MdOutlineCircle
            className={["answer__icon", "bg-second", "txt-white"].join(" ")}
          />
          <p className={["txt-white"].join(" ")}>있을까요?</p>
        </>
      ) : (
        <>
          <GrIcons.GrClose
            className={["answer__icon", "bg-prime", "txt-white"].join(" ")}
          />
          <p className={["txt-white"].join(" ")}>없을까요?</p>
        </>
      )}
    </div>
  );
};

export default AnswerCard;
