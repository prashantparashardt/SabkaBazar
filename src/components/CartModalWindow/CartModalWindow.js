import React, { useRef, useEffect } from "react";
import "./CartModalWindow.scss";
import CartProducts from "./CartProducts/CartProducts";
import LowestPriceLogo from "../../assets/lowest-price.png";

function CartModalWindow(props) {
  let windowtoggle = ["backdrop", props.openCart ? "" : "hidden"].join(" ");
  // console.log(props);
  const cartCloseButton = useRef(null);
  useEffect(() => {
    console.log(cartCloseButton.current);
    cartCloseButton.current.focus();
    return () => {
      console.log("Hello");
    };
  }, []);

  const CheckoutHandler = (e) => {
    if (e.key === "Tab") {
      cartCloseButton.current.focus();
    }
  };

  return (
    <div className={windowtoggle}>
      <div className="cartModalWindow">
        <div
          ref={cartCloseButton}
          tabIndex="-1"
          className="cartModalWindow__container"
          role="dialog"
          aria-modal="true"
        >
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
          {props.addedProductsInCart.length === 0 ? (
            <div className="cartModalWindow__footer">
              <button
                onKeyDown={CheckoutHandler}
                className="cartModalWindow__checkout"
                onClick={props.cartCheckout}
              >
                <span style={{ margin: "auto" }}>Start Shopping</span>
              </button>
            </div>
          ) : (
            <div className="cartModalWindow__footer">
              <div className="cartModalWindow__promo">
                Promo code can be applied on payment page
              </div>
              <button
                className="cartModalWindow__checkout"
                onClick={props.cartCheckout}
                onKeyDown={CheckoutHandler}
                aria-label={`Total Price for all products is ${props.finalPrice}. Proceed to checkout Page`}
              >
                <span aria-hidden="true"> Proceed to Checkout</span>
                <span aria-hidden="true">{` Rs ${props.finalPrice} >`}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModalWindow;
