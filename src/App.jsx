import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./Pages/Mobile";
import Laptop from "./Pages/Laptop";
import Smartwatch from "./Pages/Smartwatch";
import Tablets from "./Pages/Tablets";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/smartphone" element={<Smartwatch />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishList" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
