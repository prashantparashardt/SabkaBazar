import React from "react";
import "./CategorySidebar.scss";
import CategorySidebarElement from "./CategorySidebarElement/CategorySidebarElement";

function CategorySidebar(props) {
  return (
    <div className="categorySidebar">
      {props.categoriesData.map((category) => {
        return (
          <CategorySidebarElement
            key={category.id}
            categoryName={category.name}
            categorySelected={() => props.categorySelected(category.id)}
            seletcedCategory={
              props.seletcedCategory === category.id ? true : false
            }
          />
        );
      })}
    </div>
  );
}

export default CategorySidebar;