import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Components/Context/CartContext.jsx";
import WishlistProvider from './WishlistContext/WishlistProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
      <WishlistProvider>
        <App />
    </WishlistProvider>
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
