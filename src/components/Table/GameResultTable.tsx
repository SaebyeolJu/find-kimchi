import React, { useMemo } from "react";
import { useTable } from "react-table";

import { COLUMNS } from "./GameResultColumns";

type Column = {
  Header: string;
  accessor: string;
};

type Data = {
  number: string;
  name: string;
  user_answer: string;
  correct_answer: string;
  is_correct: string;
};

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
            {headerGroup.headers.map(
              (column) => (
                console.log(column),
                (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                )
              )
            )}
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
