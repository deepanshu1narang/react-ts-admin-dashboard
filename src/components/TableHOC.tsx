import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { useTable, Column, TableOptions, usePagination, useSortBy } from "react-table";

export default function TableHOC<T extends Object>(columns: Column<T>[], data: T[], containerClassName: string, heading: string, showPagination?: boolean) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
        pageIndex: 0,
      },
    };

    const table = useTable(options, useSortBy, usePagination);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      canPreviousPage,
      canNextPage,
      pageCount,
      nextPage,
      previousPage,
      state: { pageIndex },
    } = table;

    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <div className="tableContainer">
          <table className="table" {...getTableProps()}>
            <thead>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup) => (
                  // Apply the header row props
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {
                            // Render the header
                            column.render("Header")
                          }{" "}
                          {column.isSorted ? column.isSortedDesc ? <FaRegArrowAltCircleDown /> : <FaRegArrowAltCircleUp /> : ""}
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>
            <tbody {...getTableBodyProps()}>
              {
                // Loop over the table rows
                page.map((row) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props
                    <tr {...row.getRowProps()}>
                      {
                        // Loop over the rows cells
                        row.cells.map((cell) => {
                          // Apply the cell props
                          return (
                            <td {...cell.getCellProps()}>
                              {
                                // Render the cell contents
                                cell.render("Cell")
                              }
                            </td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}

          {showPagination && (
            <div className="table-pagination">
              <button disabled={!canPreviousPage} onClick={previousPage}>
                Prev
              </button>
              <span>{`${pageIndex + 1} of ${pageCount}`}</span>
              <button disabled={!canNextPage} onClick={nextPage}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
}
