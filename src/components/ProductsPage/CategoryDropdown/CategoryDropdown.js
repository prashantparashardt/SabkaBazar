import React from "react";
import "./CategoryDropdown.scss";
// import CategoryOption from "./CategoryOption/CategoryOption";

function CategoryDropdown(props) {
  //   const helo = () => {
  //     // console.log("You selected: ", this.value);
  //   };

  return (
    <div className="CategoryDropdown">
      <select
        className="CategoryDropdown__select"
        onChange={props.optionSelected}
        // defaultValue={"DEFAULT"}
        value={props.seletcedCategory ? props.seletcedCategory : ""}
      >
        <option value="">All Products</option>
        {props.categoriesData.map((category) => {
          return (
            <option
              key={category.id}
              value={category.id}
              // selected={}
            >
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CategoryDropdown;
