import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl animate-in fade-in duration-700">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Welcome back to Go!
        <br />
        <span className="text-cyan-500 text-2xl md:text-5xl">
          Smart Views - Better Decisions
        </span>
      </h1>
    </div>
  );
};

export default Home;
