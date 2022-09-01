import { useState, useCallback, useEffect } from "react";
import { useAsync } from "react-async";
import axios from "../api/axios";

import AnswerCard from "../components/GameAnswerCard";
import GameResult from "../components/GameResult";

import { shuffleArray } from "../function/shuffle";

const Game = () => {
  /*
  isData - fetch된 데이터 저장
  games - 정리된 게임 데이터. array객체
  currentGame - 현재 게임 순서. int형
  score - 게임 점수. int
  showScore - 게임 종료 후 점수를 보여주기 위해 만든 상태
  */
  const [isData, setIsData] = useState(false);

  const [games, setGames] = useState();
  const [currentGame, setCurrentGame] = useState(0);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  /**
   * @description - fetch해서 game 데이터를 받아오고, 참/거짓 순서로 된 데이터를 순서없이 섞은(shuffle) 데이터 return 해줌
   */
  const fetchGameInfo = useCallback(async () => {
    try {
      const request = await axios.get("/game");

      const data_array = request.data.data[0];
      const shuffled_array = shuffleArray(
        data_array.t_kimches.concat(data_array.f_kimches)
      );

      setGames(shuffled_array);
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

  // fetchGameInfo로 game 데이터를 불러옴
  useEffect(() => {
    fetchGameInfo();
    setIsData(true);
  }, [isData]);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!info) return <div>오류가 있습니다.</div>;

  /**
   * @param userAnswer - 사용자가 선택한 답. 나중에 지금 퀴즈의 답과 맞는지 비교해서 점수 count
   * @description - O / X 버튼 클릭하면 정답 체크, 점수 기록, 퀴즈의 개수와 진행 체크
   * 1. 정답체크 : checkAnswer 함수 사용
   * 2. 점수 기록 : 정답 비교하고 맞으면
   * 3. 퀴즈 진행 체크 : 퀴즈는 총 10개. 현재 퀴즈 순서에 +1해서 다음으로 넘어감. 11이되면 showScore를 true로해서 점수를 보여줌
   */
  const handleAnswerBtnClick = (userAnswer: string) => {
    const nextGame = currentGame + 1;
    if (nextGame < games.length - 1) {
      setCurrentGame(nextGame);
      checkAnswer(userAnswer);
    } else {
      setShowScore(true);
    }
  };

  /**
   * @param userAnswer - user가 고른 정답
   * @description - 퀴즈가 정답이면(user의 answer와 현재 순서의 quiz의 isKimchi 값이 일치한다면) 점수 +1(score + 1)
   */
  const checkAnswer = (userAnswer: string) => {
    const quiz_answer = games[currentGame].isKimchi;
    const nextScore = score + 1;

    if (userAnswer.toUpperCase() === quiz_answer) {
      setScore(nextScore);
    }
  };

  /**
   * @description - 게임 재시작 버튼을 누를 때 시작(재시작을 위한 변수 재설정)
   * 1. 게임 점수인 score 변수를 0으로 리셋
   * 2. 현재 퀴즈 순서(currentQuiz)변수를 0으로 리셋
   * 3. 퀴즈 결과를 가리기 위해 showScore도 true로 재설정
   */
  function resetGame() {
    setScore(0);
    setCurrentGame(0);
    setShowScore(false);
    setIsData(false);
  }

  return (
    <div className="container">
      {showScore ? (
        <GameResult resetGame={resetGame} score={score} />
      ) : (
        <>
          <h1 className={["game__counter", "txt-white"].join(" ")}>
            {currentGame + 1} / 10
          </h1>
          <div className="quiz">
            <img
              className="game__img"
              src={games![currentGame]!.img_link}
              alt="game__img"
            />
            <h2 className="txt-white">{games[currentGame]?.name} 김치</h2>
          </div>
          <div className="answer">
            <AnswerCard
              isCorrect={true}
              handleAnswerBtnClick={handleAnswerBtnClick}
            />
            <AnswerCard
              isCorrect={false}
              handleAnswerBtnClick={handleAnswerBtnClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
