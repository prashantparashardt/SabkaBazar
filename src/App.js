import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import CartModalWindow from "./components/CartModalWindow/CartModalWindow";
function App() {
  const [noOfCartItems, setNoOfCartItems] = useState(0);
  const [productsInfo, setProductInfo] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  //To add Products in the cart on from Products page
  const addProductHandler = (product) => {
    function httpRequest(method, url, body) {
      return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            resolve(JSON.parse(this.responseText));
          }
        };
        xhttp.open(method, url, true);
        if (method === "POST") {
          xhttp.send(body);
        } else {
          xhttp.send();
        }
      });
    }
    httpRequest("POST", "http://localhost:5000/addToCart", {
      productId: product.id,
    }).then((response) => {
      if (response.response === "Success") {
        setNoOfCartItems((prevState) => prevState + 1);

        let products = [...productsInfo];
        const productExists = products.filter((item) => {
          return item.name === product.name;
        });
        if (productExists.length === 0) {
          let newProduct = { ...product, quantity: 1 };
          products.push(newProduct);
          setProductInfo(products);
        } else {
          productExists[0].quantity = productExists[0].quantity + 1;
          products.map(
            (product) =>
              productExists.find((o) => o.name === product.name) || product
          );
          setProductInfo(products);
        }
      } else {
        alert("Error");
      }
    });
  };

  // To calculate the total Price of all the item in the cart
  useEffect(() => {
    if (productsInfo.length > 0) {
      const finalPrice = productsInfo
        .map((product) => {
          return product.price * product.quantity;
        })
        .reduce((sum, cur) => {
          return sum + cur;
        });
      setTotalPrice(finalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [productsInfo]);

  // To toggle cart modal window from cart button
  const openWindowCartHandler = () => {
    if (isCartOpen) {
      document.body.style.overflow = "unset";
      setIsCartOpen(false);
    } else {
      document.body.style.overflow = "hidden";
      setIsCartOpen(true);
    }
  };
  //To close cart button from Close button in Cart Modal window
  const closeCartWindowHandler = () => {
    setIsCartOpen(false);
    document.body.style.overflow = "unset";
  };

  // To increase the quantity of exisiting product present in the cart
  const addCartItemHandler = (productId) => {
    let products = [...productsInfo];
    const productExists = products.filter((item) => {
      return item.id === productId;
    });
    productExists[0].quantity = productExists[0].quantity + 1;
    products.map(
      (product) => productExists.find((o) => o.name === product.name) || product
    );
    setProductInfo(products);
    const countAfterAddingProduct = noOfCartItems + 1;
    setNoOfCartItems(countAfterAddingProduct);
  };
  // To decrease the quantity or remove exisiting product present in the cart
  const removeCartItemHandler = (productId) => {
    let productData = [...productsInfo];
    const productIndex = productData.findIndex((product) => {
      return product.id === productId;
    });
    if (productData[productIndex].quantity > 1) {
      productData[productIndex].quantity -= 1;
    } else {
      productData.splice(productIndex, 1);
    }

    setProductInfo(productData);
    const countAfterRemovingProduct = noOfCartItems - 1;
    setNoOfCartItems(countAfterRemovingProduct);
  };

  return (
    <div className="App">
      <Header
        cartItems={noOfCartItems}
        openCartWindow={openWindowCartHandler}
      />
      <main className="main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/products"
            render={() => <ProductsPage addProduct={addProductHandler} exact />}
          />
          <Route path="/products/:id" component={ProductsPage} />
          <Route path="/Signin" component={Signin} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
        {isCartOpen && (
          <CartModalWindow
            openCart={isCartOpen}
            noOfCartItems={noOfCartItems}
            closeCartWindow={closeCartWindowHandler}
            addedProductsInCart={productsInfo}
            finalPrice={totalPrice}
            removeCartItem={removeCartItemHandler}
            addCartItem={addCartItemHandler}
            cartCheckout={closeCartWindowHandler}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
