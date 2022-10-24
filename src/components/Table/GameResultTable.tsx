import React, { useMemo } from "react";
import { useTable } from "react-table";

import MOCK_DATA from "./TableTempData.json";
import { COLUMNS } from "./GameResultColumns";

type Column = {
  Header: string;
  accessor: string;
};

type Data = {
  number: string;
  name: string;
  submitted_answer: string;
  correct_answer: string;
};

const GameResultTable = () => {
  const columns = useMemo<Column[]>(() => COLUMNS, []);
  const data = useMemo<Data[]>(() => MOCK_DATA, []);

  const tableInstance = useTable({
    // @ts-ignore
    columns: columns,
    data: data,
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
