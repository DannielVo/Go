import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `font-manrope antialiased tracking-tight transition-all duration-200 
   active:scale-95
   pb-1 border-b-2
   ${
     isActive
       ? "text-cyan-600 border-cyan-600 font-bold"
       : "text-slate-600 border-transparent hover:text-cyan-500"
   }`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center w-full px-8 py-4 bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200 shrink-0">
        <div className="flex items-center gap-8">
          <img
            src={assets.mainLogo}
            alt="GO's logo"
            className="h-9 w-17 rounded-md object-contain transition-transform duration-300"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navClass}>
            Products
          </NavLink>

          <NavLink to="/admin" className={navClass}>
            Admin
          </NavLink>

          <div className="h-4 w-px bg-slate-300 mx-2"></div>

          <button className="pb-1 text-slate-600 font-medium hover:text-red-500 duration-200 active:scale-95 transition-transform font-manrope antialiased tracking-tight cursor-pointer">
            Logout
          </button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 text-primary"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center text-center">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Menu */}
          <div className="flex flex-col gap-8 text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : "text-slate-600"
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : "text-slate-600"
              }
              onClick={() => setOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : "text-slate-600"
              }
              onClick={() => setOpen(false)}
            >
              Admin
            </NavLink>

            <button
              onClick={() => {
                setOpen(false);
                alert("Logging out...");
              }}
              className="text-slate-600 hover:text-red-400"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
