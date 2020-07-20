import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

function Pagination(props) {
  const chosenPageIndex = props.allPageNumbers.findIndex(
    (num) => num === props.chosen
  );
  let displayedPages;
  if (chosenPageIndex < 2) {
    displayedPages = props.allPageNumbers.slice(0, 5);
  } else if (chosenPageIndex > props.maxPageNumber - 3) {
    displayedPages = props.allPageNumbers.slice(-5);
  } else {
    displayedPages = props.allPageNumbers.slice(
      chosenPageIndex - 2,
      chosenPageIndex + 3
    );
  }
  return (
    <div className="pagination-control">
      <ul className="pagination">
        <li className="non-active-page" name={1} onClick={props.changePage}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </li>
        <li className="non-active-page" onClick={props.prevPage}>
          Prev
        </li>

        {displayedPages.map((number) => (
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
        <li
          className="non-active-page"
          name={props.maxPageNumber}
          onClick={props.changePage}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
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
      </div>
    </div>
  );
}

export default Pagination;
