import React from "react";
import "./CategorySidebarElement.scss";
function CategorySidebarElement(props) {
  return (
    <div
      role="button"
      tabIndex="0"
      className={
        props.seletcedCategory
          ? "categorySidebarElement  selected"
          : "categorySidebarElement"
      }
      onClick={props.categorySelected}
    >
      {props.categoryName}
    </div>
  );
}

export default CategorySidebarElement;
