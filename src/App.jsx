import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CategorySection from './components/category-section/CategorySection';
import CategoryBar from './components/category-bar/CategoryBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./pages/Mobile";
import Laptop from './pages/Laptop';
import Smartwatch from './pages/Smartwatch';
import Tablets from './pages/Tablets';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import WhishList from "./Pages/WhishList";

function App() {
  return (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <CategoryBar />
      <Routes>
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/smartphone" element={<Smartwatch />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whishList" element={<WhishList />} />
      </Routes>
      <CategorySection />
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App
