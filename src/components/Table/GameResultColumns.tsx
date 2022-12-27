/**
 * GameResult에 들어가는 컬럼들
 */

export const COLUMNS = [
  {
    Header: "순서",
    accessor: "gameIdx",
  },
  {
    Header: "이름",
    accessor: "name",
  },
  {
    Header: "내 선택",
    accessor: "userAnswer",
  },
  {
    Header: "정답",
    accessor: "correctAnswer",
  },

  {
    Header: "정답여부",
    accessor: "isCorrect",
  },
];
