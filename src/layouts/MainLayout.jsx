import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grow flex items-center justify-center px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
