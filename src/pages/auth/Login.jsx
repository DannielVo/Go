import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 font-sans antialiased flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-112.5 rounded-2xl bg-white py-5 px-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white transition-all">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-40 h-40 object-contain">
            <img src={assets.mainLogo} alt="GO's logo" />
          </div>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <input
                type="email"
                className="block w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-primary transition-all outline-none"
                placeholder="name@email.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <label className="text-sm font-bold text-slate-700">
                Password
              </label>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#067bf9] transition-colors">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-12 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-primary transition-all outline-none"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          <button className="flex items-center justify-center gap-2 w-full mb-5 bg-primary hover:bg-hover text-white font-bold py-3 rounded-xl transition-colors duration-300 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
