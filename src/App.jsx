import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Mobile from "./Pages/Mobile";
import Laptop from "./Pages/Laptop";
import Smartwatch from "./Pages/Smartwatch";
import Tablets from "./Pages/Tablets";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CategoryBar from "./Components/category-bar/CategoryBar";
import { CartContext } from "./Components/Context/CartContext";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // addToCart Function
  const addToCartHandler = (product) => {
    let updatedItem;
    const exsitingProduct = cartItems.find((item) => item.id === product.id);
    if (exsitingProduct) {
      updatedItem = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedItem = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(updatedItem);
    // update added item in Local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedItem));
  };

  // removeFromCartIcon Function
  const removeFromCartIcon = (product) => {
    let removedItem;
    const exsitingItem = cartItems.find((item) => item.id === product.id);
    if (exsitingItem.quantity === 1) {
      removedItem = cartItems.filter((item) => item.id !== product.id);
    } else {
      removedItem = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
    setCartItems(removedItem);
    // update removed item in Local storage
    localStorage.setItem("cartItems", JSON.stringify(removedItem));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
          addToCartHandler,
          removeFromCartIcon,
        }}
      >
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route element={<CategoryBar />}>
              <Route index element={<Home />} />
              <Route path="mobile" element={<Mobile />} />
              <Route path="laptop" element={<Laptop />} />
              <Route path="smartphone" element={<Smartwatch />} />
              <Route path="tablets" element={<Tablets />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route path="wishList" element={<WishList />} />
            </Route>
          </Route>
        </Routes>
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default App;
