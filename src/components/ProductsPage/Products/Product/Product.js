import React from "react";
import "./Product.scss";

function Product({ name, imageUrl, description, price, addProduct }) {
  return (
    <div className="product">
      <div className="product__name">{name}</div>
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
            <button className="product__button_mobile" onClick={addProduct}>
              Buy Now@ {price}
            </button>
          </div>
        </div>
      </div>
      <div className="product__pricewithbtn_Desktop">
        <div className="product__price">MRP Rs.{price}</div>
        <button className="product__button" onClick={addProduct}>
          Buy Now
        </button>
      </div>
      <div className="product__pricewithbtn_tablet">
        <button className="product__button_tablet" onClick={addProduct}>
          {"Buy Now@ Rs" + price}
        </button>
      </div>

      <hr />
    </div>
  );
}

export default Product;
