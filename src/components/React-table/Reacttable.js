import React from "react";
import styled from "styled-components";
import { useTable, usePagination, useRowSelect } from "react-table";
import { colors } from "../../styles/colors";

const Styles = styled.div`
  padding: 1rem;

  table {
    width: 100%;
    padding: 2rem 0;
    thead {
      width: 100%;
      th {
        text-align: left;
        color: ${colors.text};
        font-size: 1.2rem;
        font-weight: 400;
        padding-bottom: 0.5rem;
      }
    }
    tbody {
      position: relative;
      .separator {
        position: absolute;
        max-width: 80vw;
        width: 96%;
        height: 1px;
        background-color: #d7dbec;
        // margin: 1rem 0;
      }
    }

    tr {
      color: ${colors.general};
      font-size: 1.1rem;
      height: 35px;

      td {
        &.img {
          display: flex;
          align-items: center;
          padding-top: 0.3rem;

          img {
            width: 35px;
            padding-right: 0.5rem;
          }

          .char {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #d7dbec;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            font-size: 1.7rem;
            margin-right: 1rem;
            text-transform: uppercase;
            color: #fff;
          }
        }
        span {
          padding: 0.5rem 1rem;
          border-radius: 5px;

          &.colored {
            background-color: #c4f8e2;
            color: ${colors.green};
          }

          &.uncolored {
            background-color: #eaecf5;
            color: #5a607f;
          }

          &.blue {
            background-color: #1e5eff;
            color: #fff;
          }

          &.orange {
            background-color: #f99600;
            color: #fff;
          }

          &.gray {
            background-color: #5a607f;
            color: #fff;
          }
        }
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      //border-bottom: 1px solid #d7dbec;
      border-right: none;

      :last-child {
        border-right: 0;
      }
    }
  }

  .table-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.text};
    font-size: 1.2rem;
  }

  .pagination {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    button {
      outline: none;
      img {
        position: relative;
        width: 20px;
        top: 0.25rem;
      }
      margin-right: 1rem;
    }

    .goto-input {
      padding: 0 0.5rem;
      width: 50px;
      margin-right: 1rem;
      border: 1px solid #d7dbec;
      color: ${colors.text};
    }

    select {
      font-size: 1.2rem;
      border: 1px solid #d7dbec;
      color: ${colors.text};
    }
  }
`;

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  // Render the UI for your table
  return (
    <>
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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <>
                <div className="separator"></div>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="table-bottom">
        <div className="pagination">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <img src="/icons/tableleft.png" alt="" />
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <img src="/icons/tableright.png" alt="" />
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className="goto-input"
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="result">{data.length} Results</div>
      </div>
      {/*  */}
    </>
  );
}

function Reacttable({ columns, data }) {
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Reacttable;
