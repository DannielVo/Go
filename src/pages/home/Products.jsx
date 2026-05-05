import React from "react";
import { PRODUCTS_LIST } from "../../assets/dummy";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 w-full">
      {/* <!-- Left Sidebar: Filters --> */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="top-25 mt-3">
          <h2 className="font-label-caps text-label-caps text-on-surface mb-8 tracking-widest">
            FILTERS
          </h2>
          <div className="p-6 border border-outline-variant rounded-lg">
            <h3 className="font-body-md font-bold text-on-surface mb-4">
              Categories
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline text-primary focus:ring-primary custom-checkbox"
                  type="checkbox"
                />
                <span className="font-body-sm text-secondary group-hover:text-on-surface transition-colors">
                  Men
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline text-primary focus:ring-primary custom-checkbox"
                  type="checkbox"
                />
                <span className="font-body-sm text-secondary group-hover:text-on-surface transition-colors">
                  Women
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-outline text-primary focus:ring-primary custom-checkbox"
                  type="checkbox"
                />
                <span className="font-body-sm text-secondary group-hover:text-on-surface transition-colors">
                  Kids
                </span>
              </label>
            </div>
          </div>
        </div>
      </aside>
      {/* <!-- Main Content Area --> */}
      <div className="grow">
        {/* <!-- Top Bar --> */}
        <div className="flex justify-between items-center pb-3 border-outline-variant">
          <h1 className="font-label-caps text-label-caps text-on-surface tracking-widest text-xl">
            ALL PRODUCTS
          </h1>
          <div className="relative">
            <select className="appearance-none bg-white border border-outline-variant rounded-lg px-4 py-2 pr-10 font-body-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer">
              <option>Sort by Low to High</option>
              <option>Sort by High to Low</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">
              expand_more
            </span>
          </div>
        </div>

        {/* <!-- Product List --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRODUCTS_LIST.map((product, index) => (
            <ProductCard key={`product-${product.id}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
