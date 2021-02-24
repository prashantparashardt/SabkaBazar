import React from "react";
import "./CategorySidebarElement.scss";
import { Link } from "react-router-dom";
function CategorySidebarElement(props) {
  return (
    <Link
      to={props.seletcedCategory ? "/products/" : "/products/" + props.id}
      className={
        props.seletcedCategory
          ? "categorySidebarElement  selected"
          : "categorySidebarElement"
      }
      onClick={props.categorySelected}
    >
      {props.categoryName}
    </Link>
  );
}

export default CategorySidebarElement;
