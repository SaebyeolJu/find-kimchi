import React, { useMemo } from "react";
import { useTable } from "react-table";

import { COLUMNS } from "./GameResultColumns";

type Column = {
  Header: string;
  accessor: string;
};

type Data = {
  gameIdx: string;
  name: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: string;
};

/**
 * @description - react-table 라이브러리를 사용해서 받아온 게임 결과를 테이블로 보여주는 component
 * @param gameResult - 게임 결과를 저장하는 배열
 * @returns 게임 결과 테이블
 * @see GameResult.tsx
 * @see GameResultColumns.tsx
 */
const GameResultTable = (gameResult: any) => {
  const result_data = JSON.parse(gameResult.gameResult);
  const columns = useMemo<Column[]>(() => COLUMNS, []);
  const data = useMemo<Data[]>(() => result_data, []);

  const tableInstance = useTable({
    // @ts-ignore
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GameResultTable;
