import React from "react";
import "./Category.scss";

const Category = (props) => {
  let imagePosition = "";
  if (props.order % 2 === 0) {
    imagePosition = "reverse";
  }
  return (
    <React.Fragment>
      <hr className="horizontalRow" />
      <div className={["category", imagePosition].join(" ")}>
        <div className="category__image">
          <img src={props.imageUrl} alt={props.name} />
        </div>
        <div className="category__content">
          <div className="category__content__inside">
            <h3>{props.name}</h3>
            <p className="category__description">{props.description}</p>
            <button className="category__btnName" onClick={props.setPath}>
              {"Explore " + props.btnName}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Category;
