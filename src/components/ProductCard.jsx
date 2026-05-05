import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-xl product-card-shadow transition-all duration-300 overflow-hidden flex flex-col w-[300px]">
      <div className="flex items-center justify-center bg-surface-container p-4">
        <img
          alt={product.title}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
          src={product.image}
        />
      </div>

      <div className="p-4 text-left">
        <h3 className="font-medium text-slate-800 text-sm mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-cyan-600 font-bold text-base">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
