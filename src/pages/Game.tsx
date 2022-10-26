import { useState, useCallback, useEffect, useMemo } from "react";
import axios from "../api/axios";

import AnswerCard from "../components/GameAnswerCard";
import GameResult from "../components/GameResult";
import CategoryIcon from "../components/CategoryIcon";

import { shuffleArray } from "../function/shuffle";

/**
 * @returns - O / X 퀴즈 게임 페이지
 */
const Game = () => {
  /*
  isData - fetch된 데이터 저장
  games - 정리된 게임 데이터. array객체
  currentGame - 현재 게임 순서. int형
  score - 게임 점수. int
  showScore - 게임 종료 후 점수를 보여주기 위해 만든 상태
  gameResult - 게임 결과(user가 선택한 답안, 정답, 정답여부)를 저장하는 상태
  */
  const [isData, setIsData] = useState(false);

  const [games, setGames] = useState();
  const [currentGame, setCurrentGame] = useState(0);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [gameResults, setGameResults] = useState<object[]>([]);

  /**
   * @description - fetch해서 game 데이터를 받아오고, 참/거짓 순서로 된 데이터를 순서없이 섞은(shuffle) 데이터 return 해줌
   */
  const fetchGameInfo = useCallback(async () => {
    const URL = `/game`;

    try {
      const request = await axios.get(URL);

      const data_array = request.data.data[0];
      const shuffled_array = shuffleArray(
        data_array.t_kimches.concat(data_array.f_kimches)
      );

      setGames(shuffled_array);
      return games;
    } catch {
      console.log("fetching error");
    }
  }, []);

  // fetchGameInfo로 game 데이터를 불러옴
  useEffect(() => {
    fetchGameInfo();
    setIsData(true);
  }, [isData]);

  if (!games) return <div className="txt-white">페이지에 오류가 있습니다.</div>;

  const randomNameNum = Math.floor(
    Math.random() * games[currentGame]?.kor_names.length
  );

  const createGameResults = (userAnswer: any, correctAnswer: any) => {
    const gameResult = {
      number: (currentGame + 1).toString(),
      name: games[currentGame].kor_names[randomNameNum],
      user_answer: userAnswer ? "⭕" : "❌",
      correct_answer: games[currentGame].is_kimchi ? "⭕" : "❌",
      is_correct: userAnswer === correctAnswer ? "✅" : "❎",
    };
    setGameResults([...gameResults, gameResult]);
  };

  /**
   * @param userAnswer - 사용자가 선택한 답. 나중에 지금 퀴즈의 답과 맞는지 비교해서 점수 count
   * @description - O / X 버튼 클릭하면 정답 체크, 점수 기록, 퀴즈의 개수와 진행 체크
   * 1. 정답체크 : checkAnswer 함수 사용
   * 2. 점수 기록 : 정답 비교하고 맞으면
   * 3. 퀴즈 진행 체크 : 퀴즈는 총 10개. 현재 퀴즈 순서에 +1해서 다음으로 넘어감. 11이되면 showScore를 true로해서 점수를 보여줌
   */
  const handleAnswerBtnClick = (userAnswer: string) => {
    createGameResults(userAnswer, games[currentGame]?.is_kimchi);
    checkAnswer(userAnswer);

    const nextGame = currentGame + 1;
    if (nextGame < games.length - 1) {
      setCurrentGame(nextGame);
    } else {
      setShowScore(true);
    }
  };

  /**
   * @param userAnswer - user가 고른 정답
   * @description - 퀴즈가 정답이면(user의 answer와 현재 순서의 quiz의 isKimchi 값이 일치한다면) 점수 +1(score + 1)
   */
  const checkAnswer = (userAnswer: string) => {
    const quiz_answer = games[currentGame].is_kimchi;
    const nextScore = score + 1;

    if (userAnswer === quiz_answer) {
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
    setGameResults([]);
  }

  return (
    <div className="container">
      {showScore ? (
        <GameResult
          resetGame={resetGame}
          score={score}
          gameResult={gameResults}
        />
      ) : (
        <>
          <h1 className={["game__counter", "txt-white"].join(" ")}>
            {currentGame + 1} / 10
          </h1>
          <div className={["quiz", "gap", "flex-column"].join(" ")}>
            <div className={["center", "gap"].join(" ")}>
              <CategoryIcon
                category={games[currentGame].ingredient_categories}
              />
            </div>
            <a
              href={games[currentGame]?.ingredient_link}
              target="_blank"
              rel='target="_blank"'
            >
              <img
                className="game__img"
                src={games[currentGame]?.ingredient_pic}
                alt="game__img"
              />
            </a>
            <h2 className={["txt-white", "italic"].join(" ")}>
              {games[currentGame]?.kor_names[randomNameNum]}
            </h2>
            <h2 className="txt-white">김치</h2>
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
