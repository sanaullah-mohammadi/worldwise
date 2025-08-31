import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Product" element={<Product />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="AppLayout" element={<AppLayout />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
