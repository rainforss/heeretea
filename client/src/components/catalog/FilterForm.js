import React from "react";

function FilterForm(props) {
  return (
    <>
      <div className="filter-div">
        <div
          name=""
          onClick={props.handleSelect}
          className={props.chosen === "" ? "active-filter" : "filter"}
        >
          All Of Them
        </div>
        {props.categories.map((category) => (
          <div
            id={category.name}
            key={category.name}
            name={category.name}
            onClick={props.handleSelect}
            className={
              (props.chosen === category.name ? "active-filter" : "filter") +
              " " +
              (category.name ? category.name.replace(/\s/g, "") : "")
            }
          >
            {category.name}
          </div>
        ))}
      </div>
    </>
  );
}
export default FilterForm;
