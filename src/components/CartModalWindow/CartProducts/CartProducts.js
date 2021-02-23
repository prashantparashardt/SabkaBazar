import React from "react";
import "./CartProducts.scss";

function CartProducts(props) {
  let totalPrice = props.price * props.quantity;
  return (
    <div className="CartProducts">
      <img className="CartProducts__Img" src={props.imageUrl} alt={""} />
      <div className="CartProducts__middleContainer">
        <div className="CartProducts__middleContainer__heading">
          {props.name}
        </div>
        <div className="CartProducts__middleContainer__btn">
          <button
            className="CartProducts__middleContainer__less"
            onClick={props.removeCartItem}
          >
            -
          </button>
          <span style={{ width: "40px", textAlign: "center" }}>
            {props.quantity}
          </span>
          <button
            className="CartProducts__middleContainer__more"
            onClick={props.addCartItem}
          >
            +
          </button>
          <span
            style={{
              width: "40px",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            x
          </span>
          <span style={{ width: "40px", textAlign: "left" }}>
            Rs.{props.price}
          </span>
          <span
            style={{ textAlign: "center", position: "absolute", right: "23px" }}
          >
            Rs.{totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
