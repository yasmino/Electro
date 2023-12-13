import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Components/Context/CartContext.jsx";
import WishlistProvider from "./WishlistContext/WishlistProvider";
import SearchContextProvider from "./Components/Context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <SearchContextProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </SearchContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
