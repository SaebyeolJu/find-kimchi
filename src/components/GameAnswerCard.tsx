import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import { FunctionComponent } from "react";

interface AnswerCardProps {
  userAnswer: boolean;
  correctAnswer: boolean;
  handleAnswer: (userAnswer: boolean, correctAnswer: boolean) => void;
}

/**
 *
 * @param userAnswer : 참 / 거짓 카드 구분을 위함
 * @param handleAnswer : 사용자 정답처리 함수. 부모 component에서 쓰이는 state들을 관리하기 위한 함수로 부모 component에서 정의되어 있음
 * @return - O / X 선택지 카드 component
 */
const AnswerCard: FunctionComponent<AnswerCardProps> = ({
  userAnswer,
  correctAnswer,
  handleAnswer,
}) => {
  return (
    <>
      {userAnswer ? (
        <div
          className="game__answer__card"
          onClick={() => handleAnswer(userAnswer, correctAnswer)}
        >
          <MdIcons.MdOutlineCircle
            className={[
              "game__answer__card__icon",
              "bg-second",
              "txt-white",
            ].join(" ")}
          />
          <p className="game__answer__card__txt">있을까요?</p>
        </div>
      ) : (
        <div
          className="game__answer__card"
          onClick={() => handleAnswer(userAnswer, correctAnswer)}
        >
          <GrIcons.GrClose
            className={["game__answer__card__icon", "bg-prime"].join(" ")}
          />
          <p className="game__answer__card__txt">없을까요?</p>
        </div>
      )}
    </>
  );
};

export default AnswerCard;
