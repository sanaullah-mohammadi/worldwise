import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
import CityList from "./Components/CityList";
const BASE_URL = "http://localhost:9000/cities";
export default function App() {
  const [cities, setCities] = useState({});
  const [isloading, setIsloading] = useState(false);
  useEffect(function () {
    async function feachCities() {
      try {
        setIsloading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = res.json();
        setCities(data);
      } catch {
        alert("there was an error loading data ... ");
      } finally {
        setIsloading(false);
      }
    }
    feachCities();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route index element={<Homepage />} />
          <Route path="Product" element={<Product />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path="cities" element={<p>list of cites</p>} />
            <Route path="countries" element={<p>list of countries</p>} />
            <Route path="form" element={<p>form</p>} />
          </Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
