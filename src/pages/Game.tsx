import { useState, useCallback, useEffect } from "react";
import axios from "../api/axios";

import AnswerCard from "../components/GameAnswerCard";
import GameResult from "../components/GameResult";
import CategoryIcon from "../components/CategoryIcon";

import { shuffleArray } from "../function/shuffle";

/**
 * @description - O / X 퀴즈 게임 페이지
 * @see GameResult.tsx
 * @see GameAnswerCard.tsx
 * @see CategoryIcon.tsx
 */

/**
 * @description - 게임에 사용되는 데이터를 저장하는 객체
 * @param ingredient_categories - 재료 카테고리
 * @param ingredient_link - 재료 설명 페이지 링크
 * @param ingredient_pic - 재료 사진 링크
 * @param kimchi_title - 김치 이름
 * @param kor_comment - 김치 설명
 * @param recipe_link - 김치 레시피 링크
 * @param recipe_pic - 김치 레시피 사진 링크
 * @param kor_names - 재료 이름
 * @param eng_names - 재료 영어 이름
 * @param is_kimchi - 김치 여부
 */

interface Game {
  ingredient_categories: string[];
  ingredient_link: string;
  ingredient_pic: string;
  kimchi_title: string;
  kor_comment: string;
  recipe_link: string;
  recipe_pic: string;
  kor_names: string[];
  eng_names: string[];
  is_kimchi: boolean;
}

/**
 * @description - 게임 결과를 저장하는 객체
 * @param gameIdx - 게임 순서
 * @param name - 게임에 사용된 재료 이름
 * @param userAnswer - 유저가 선택한 답안
 * @param correctAnswer - 정답
 * @param isCorrect - 정답 여부
 * @see GameResult.tsx
 */

interface GameResult {
  gameIdx: string;
  name: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: string;
}

/**
 * @description - 게임에 사용되는 데이터를 저장하는 객체
 * @param games - 게임에 사용되는 데이터
 * @param currentGameIdx - 현재 게임 순서
 * @param score - 게임 점수
 * @param showScore - 게임 종료 후 점수를 보여주기 위해 만든 상태
 * @param gameResults - 게임 결과(user가 선택한 답안, 정답, 정답여부)를 저장하는 상태
 * @param error - 에러 메시지
 */
interface GameState {
  games: Game[];
  currentGameIdx: number;
  score: number;
  showScore: boolean;
  gameResults: GameResult[];
  error: string | null;
  isLoading: boolean;
}

/**
 * @description - 게임 페이지
 * @see GameResult.tsx
 * @see GameAnswerCard.tsx
 * @see CategoryIcon.tsx
 * @see shuffleArray
 */
const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    games: [],
    currentGameIdx: 0,
    score: 0,
    showScore: false,
    gameResults: [],
    error: null,
    isLoading: false,
  });
  const { games, currentGameIdx, score, showScore, gameResults } = gameState;

  /**
   * @description - fetch해서 game 데이터를 받아오고, 참/거짓 순서로 된 데이터를 순서없이 섞은(shuffle) 데이터 return 해줌
   * @returns - gameState 상태 업데이트 (shuffled된 게임 데이터 업데이트, isLoading 상태 업데이트)
   * @see shuffleArray
   */
  const fetchGameInfo = useCallback(async () => {
    const URL = "/game";
    try {
      const request = await axios.get(URL);

      const dataArray = request.data.data[0];
      const shuffledArray = shuffleArray(
        dataArray.t_kimches.concat(dataArray.f_kimches)
      );
      setGameState((prevState) => ({
        ...prevState,
        games: shuffledArray,
        isLoading: true,
      }));
      return gameState;
    } catch (error) {
      console.log("fetching error");
      setGameState((prevState) => ({
        ...prevState,
        error: "There was an error fetching the game data.",
      }));
    }
  }, []);

  // fetchGameInfo로 game 데이터를 불러옴
  useEffect(() => {
    fetchGameInfo();
  }, [gameState.isLoading]);

  if (gameState.error)
    return (
      <div className={["game__error-message", "txt-white"].join(" ")}>
        페이지에 오류가 있습니다.
      </div>
    );

  if (!gameState.games.length)
    return (
      <div className={["game__loading-message", "txt-white"].join(" ")}>
        로딩중입니다. 잠시만 기다리세요!
      </div>
    );

  /**
   * @description - (eng_names, kor_names) DB값에서 재료의 이름이 여러개인 경우가 있어서 배열로 만들어둠
   *  배열에서 이름 하나를 랜덤으로 정하기 위한 함수
   **/
  const randomNameNum = Math.floor(
    Math.random() * games[currentGameIdx]?.kor_names.length
  );

  /**
   *
   * @description - 게임의 결과를 저장하는 함수(gameResults에 저장함)
   * @param {string} number - 퀴즈의 번호
   * @param {string} name - 재료 이름
   * @param {string} user_answer - user가 선택한 답안
   * @param {string} correct_answer - 정답
   * @param {string} is_correct - 정답 여부(useAnswer와 correctAnswer가 같으면 true 다르면 false)
   **/

  /**
   * @param userAnswer - 사용자가 선택한 답. 나중에 지금 퀴즈의 답과 맞는지 비교해서 점수 count
   * @description - O / X 버튼 클릭하면 정답 체크, 점수 기록, 퀴즈의 개수와 진행 체크와 저장
   * 1. 퀴즈 진행상황 체크하고 저장
   * 2. 정답체크 : checkAnswer 함수 사용
   * 3. 점수 기록 : 정답 비교하고 맞으면
   * 4. 퀴즈 진행 체크 : 퀴즈는 총 10개. 현재 퀴즈 순서에 +1해서 다음으로 넘어감. 11이되면 showScore를 true로해서 점수를 보여줌
   */

  const handleAnswer = (user_answer: boolean, correct_answer: boolean) => {
    const newGameResult: GameResult = {
      gameIdx: (currentGameIdx + 1).toString(),
      name: games[currentGameIdx].kor_names[randomNameNum],
      userAnswer: user_answer ? "⭕" : "❌",
      correctAnswer: games[currentGameIdx].is_kimchi ? "⭕" : "❌",
      isCorrect: user_answer === correct_answer ? "✅" : "❎",
    };
    setGameState((prevState) => ({
      ...prevState,
      score:
        user_answer === correct_answer ? prevState.score + 1 : prevState.score,
      gameResults: [...prevState.gameResults, newGameResult],
      currentGameIdx: prevState.currentGameIdx + 1,
    }));

    checkGameEnd();
  };

  const checkGameEnd = () => {
    if (gameState.currentGameIdx + 1 === 10) {
      setGameState((prevState) => ({ ...prevState, showScore: true }));
    }
  };

  const handleReset = () => {
    setGameState((prevState) => ({
      ...prevState,
      games: [],
      currentGameIdx: 0,
      score: 0,
      showScore: false,
      gameResults: [],
      isLoading: false,
    }));
  };

  const currentGame = games[gameState.currentGameIdx];

  return (
    <div className="game-container">
      <div className={["game__card", "frame"].join(" ")}>
        {/* 게임 횟수 11회가 되면 GameResult를 보여줌 */}
        {showScore ? (
          <GameResult
            score={score}
            gameResults={gameResults}
            handleReset={handleReset}
          />
        ) : (
          <>
            <div className="game">
              <h1 className="game__counter">{currentGameIdx + 1} / 10</h1>
              <CategoryIcon
                IngredientCategory={currentGame.ingredient_categories}
              />

              <div className="game__img-wrapper">
                <a
                  href={currentGame.ingredient_link}
                  target="_blank"
                  rel='target="_blank"'
                  className="game__img__link"
                >
                  <img
                    className="game__img"
                    src={currentGame.ingredient_pic}
                    alt="game__img"
                  />
                </a>
              </div>

              <h2 className={["game__name", "italic"].join(" ")}>
                {`${currentGame.kor_names[randomNameNum]} 김치`}
              </h2>
            </div>

            <div className="game__answer">
              <AnswerCard
                userAnswer={true}
                correctAnswer={currentGame.is_kimchi}
                handleAnswer={handleAnswer}
              />
              <AnswerCard
                userAnswer={false}
                correctAnswer={currentGame.is_kimchi}
                handleAnswer={handleAnswer}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
