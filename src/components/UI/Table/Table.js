import React from "react";
import { useTable, useRowSelect } from "react-table";

const Table = ({ columns, data, selectedRows, setSelectedRows }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    toggleAllRowsSelected,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      state: {
        selectedRowPaths: selectedRows,
      },
    },
    useRowSelect
  );

  //  setSelectedRows(selectedRowPaths);

  return (
    <table
      className="table table-striped table-bordered table-hover"
      {...getTableProps()}
    >
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
            <tr
              {...row.getRowProps({
                style: {
                  backgroundColor: row.isSelected ? "#82c7d7" : "",
                },
                onClick: (e) => {
                  toggleAllRowsSelected(false);
                  row.toggleRowSelected(
                    setSelectedRows && setSelectedRows(row.original)
                  );
                },
              })}
            >
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

export default Table;
