import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Mobile from "./Pages/Mobile";
import Laptop from "./Pages/Laptop";
import Smartwatch from "./Pages/Smartwatch";
import Tablets from "./Pages/Tablets";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Wishlist from "./WishlistContext/wishlist";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CategoryBar from "./Components/category-bar/CategoryBar";


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route element={<CategoryBar />}>
            <Route index element={<Home />} />
            <Route path="mobile" element={<Mobile />} />
            <Route path="laptop" element={<Laptop />} />
            <Route path="smartwatch" element={<Smartwatch />} />
            <Route path="tablets" element={<Tablets />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
