import React from "react";
import "./Product.scss";
// import Button from "../../../UI/Button/Button";

function Product({ name, imageUrl, description, price, addProduct }) {
  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <div className="product__imageWithDescription">
        <div className="product__image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="product__descriptionContainer">
          <p className="product__description">{description}</p>
        </div>
        <div className="product__descriptionContainer_mobileOnly">
          <p className="product__description">{description}</p>
          <div className="product__pricewithbtn_mobile">
            {/* <button
              className="product__button_mobile"
              onClick={addProduct}
              aria-label={`Click to add ${name} into cart for price Rs ${price}`}
            >
              Buy Now@ {price}
            </button> */}
            <button
              className="product__button_mobile"
              click={addProduct}
              aria-label={`Click to add ${name} into cart for price Rs ${price}`}
            >
              Buy Now@ {price}
            </button>
          </div>
        </div>
      </div>
      <div className="product__pricewithbtn_desktop">
        <div className="product__price">MRP Rs.{price}</div>
        <button
          className="product__button"
          click={addProduct}
          aria-label={`Click to add ${name} into cart`}
        >
          Buy Now
        </button>
      </div>
      <div className="product__pricewithbtn_tablet">
        <button
          className="product__button_tablet"
          onClick={addProduct}
          aria-label={`Click to add ${name} into cart for price Rs ${price}`}
        >
          {"Buy Now@ Rs " + price}
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Product;
