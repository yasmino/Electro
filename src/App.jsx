import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CategorySection from './components/category-section/CategorySection';
import CategoryBar from './components/category-bar/CategoryBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./pages/Mobile";
import Laptop from './pages/Laptop';
import Smartwatch from './pages/Smartwatch';
import Tablets from './pages/Tablets';

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
      </Routes>
      <CategorySection />
      </BrowserRouter>
    </React.Fragment>
   
  );
}

export default App
