import { useState, useCallback, useEffect } from "react";
import { useAsync } from "react-async";
import axios from "../api/axios";

import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";

import AnswerCard from "../components/AnswerCard";
import AnswerResultCard from "../components/AnswerResultCard";
import GameResult from "./GameResult";

import { shuffleArray } from "../function/shuffle";

const Game = () => {
  const [isData, setIsData] = useState(false);
  const [quizzes, setQuizzes] = useState();

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const fetchGameInfo = useCallback(async () => {
    try {
      const request = await axios.get("/game");

      const data_array = request.data.data[0];
      const shuffled_array = shuffleArray(
        data_array.t_kimches.concat(data_array.f_kimches)
      );

      setQuizzes(shuffled_array);
      return shuffleArray;
    } catch {
      console.log("fetching error");
    }
  }, []);

  const {
    data: info,
    error,
    isLoading,
  } = useAsync({
    promiseFn: fetchGameInfo,
  });

  useEffect(() => {
    fetchGameInfo();
    setIsData(true);
  }, [isData]);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!info) return <div>오류가 있습니다.</div>;

  /**
   *
   * @param userAnswer : 사용자가 선택한 답. 나중에 지금 퀴즈의 답과 맞는지 비교해서 점수 count
   * @todo
   * @description
   */

  const handleAnswerBtnClick = (userAnswer: string) => {
    setUserAnswer(userAnswer);

    const nextQuiz = currentQuiz + 1;
    if (nextQuiz < quizzes.length - 1) {
      setCurrentQuiz(nextQuiz);
      checkAnswer(userAnswer);
    } else {
      setShowScore(true);
    }
  };

  /**
   *
   * @param userAnswer
   * @description : 현재 입력한 answer과 현재 순서의 game info의 isKimchi 값이 일치한다면 점수 +1
   * setScore = score + 1
   * answer와 현재 순번 퀴즈의 isKimchi값이 같으면 점수 +1
   */
  const checkAnswer = (userAnswer: string) => {
    const quiz_answer = quizzes[currentQuiz].isKimchi;
    const nextScore = score + 1;

    if (userAnswer.toUpperCase() === quiz_answer) {
      setScore(nextScore);
    }
    setUserAnswer("");
  };

  /* 게임 다시 시작하려면 해야하는 것
      1. 게임 score를 0으로 리셋
      2. gameCnt를 1로 리셋
      -> 다시 시작하기 버튼을 누를 때 리셋 
      -> 부모 component(game 페이지)에 gameCnt랑 score 초기화해서 보내야함
      */

  function resetGame() {
    setScore(0);
    setCurrentQuiz(0);
    setShowScore(false);
  }

  return (
    <div className="container">
      {showScore ? (
        <GameResult resetGame={resetGame} score={score} />
      ) : (
        <>
          <h1 className={["game__counter", "txt-white"].join(" ")}>
            {currentQuiz + 1} / 10
          </h1>
          <div className="quiz">
            <img
              className="game__img"
              src={quizzes[currentQuiz]?.img_link}
              alt="game__img"
            />
            <h2 className="txt-white">{quizzes[currentQuiz]?.name} 김치</h2>
          </div>
          <div className="answer">
            <div
              className="answer__card"
              onClick={() => handleAnswerBtnClick("true")}
            >
              <MdIcons.MdOutlineCircle
                className={["answer__icon", "bg-dark-blue", "txt-white"].join(
                  " "
                )}
              />
              <p className={["txt-white"].join(" ")}>있을까요?</p>
            </div>
            <div
              className="answer__card"
              onClick={() => handleAnswerBtnClick("false")}
            >
              <GrIcons.GrClose
                className={["answer__icon", "bg-red", "txt-white"].join(" ")}
              />
              <p className={["txt-white"].join(" ")}>없을까요?</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
