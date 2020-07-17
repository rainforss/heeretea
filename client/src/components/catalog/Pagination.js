import React from "react";

function Pagination(props) {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.filteredProducts.length / props.postPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-control">
      <ul className="pagination">
        <li className="non-active-page" onClick={props.prevPage}>
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            name={number}
            onClick={props.changePage}
            className={
              parseInt(props.chosen) === number
                ? "active-page"
                : "non-active-page"
            }
          >
            {number}
          </li>
        ))}
        <li className="non-active-page" onClick={props.nextPage}>
          Next
        </li>
      </ul>
      <div>
        <select
          className="page-view-select"
          name="viewSelect"
          onChange={props.pageView}
          value={props.postPerPage}
        >
          <option value="9">9 items per page</option>
          <option value="6">6 items per page</option>

          <option value="3">3 items per page</option>
        </select>
        <span>Page View</span>
      </div>
    </div>
  );
}

export default Pagination;
