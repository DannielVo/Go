import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../../Final/flashup/client/src/pages/auth/Login";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Products from "./pages/home/Products";
import ProductDetail from "./pages/home/ProductDetail";
import NotFound from "../../../Final/flashup/client/src/pages/404/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        {/* <Route path="admin" element={<Admin />} />
      <Route path="admin/products" element={<AdminProducts />} /> */}
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
