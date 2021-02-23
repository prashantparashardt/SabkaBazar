import React from "react";
import "./CartModalWindow.scss";
import CartProducts from "./CartProducts/CartProducts";
import LowestPriceLogo from "../../assets/lowest-price.png";

function CartModalWindow(props) {
  let windowtoggle = ["backdrop", props.openCart ? "" : "hidden"].join(" ");
  // let windowtoggle = ["backdrop", true ? "" : "hidden"].join(" ");
  return (
    <div className={windowtoggle}>
      {/* {console.log(props.addedProductsInCart)} */}
      <div className="cartModalWindow">
        <div className="cartModalWindow__container">
          <div className="cartModalWindow__header">
            <div>
              <strong>My Cart</strong>
              {`(${props.noOfCartItems} item)`}
            </div>
            <button
              className="cartModalWindow__headerbtn"
              onClick={props.closeCartWindow}
            >
              x
            </button>
          </div>
          {props.noOfCartItems ? (
            <div className="cartModalWindow__products">
              {props.addedProductsInCart.map((product) => {
                return (
                  <CartProducts
                    key={product.id}
                    imageUrl={product.imageURL}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    removeCartItem={() => props.removeCartItem(product.id)}
                    addCartItem={() => props.addCartItem(product.id)}
                  />
                );
              })}
              <div className="cartModalWindow__banner">
                <img src={LowestPriceLogo} alt="lowest Price Logo" />
                <p>you won't find it cheaper anywhere</p>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", paddingTop: "7rem" }}>
              <strong>No items in your cart</strong>
              <br />
              Your favourite items are just a click away
            </div>
          )}
          <div className="cartModalWindow__footer">
            <div className="cartModalWindow__promo">
              Promo code can be applied on payment page
            </div>
            <button
              className="cartModalWindow__checkout"
              onClick={props.cartCheckout}
            >
              <span>Proceed to Checkout</span>
              <span>{` Rs ${props.finalPrice} >`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModalWindow;
