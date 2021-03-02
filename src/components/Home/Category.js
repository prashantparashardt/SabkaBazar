import React from "react";
import "./Category.scss";
import Button from "../UI/Button/Button";

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
          <div className="category__contentinside">
            <h3 aria-label={props.name}>{props.name}</h3>
            <p className="category__description">{props.description}</p>
            <Button className="category__btnName" click={props.setPath}>
              {"Explore " + props.btnName}
            </Button>
            {/* <button className="category__btnName" onClick={props.setPath}>
              {"Explore " + props.btnName}
            </button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Category;
