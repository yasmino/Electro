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
    const exsitingProduct = cartItems.find((item) => item.id === product.id);
    if (exsitingProduct) {
      const updatedItem = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItem);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems(newItem);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <CartContext.Provider
        value={{ cartItems, setCartItems, addToCartHandler }}
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
