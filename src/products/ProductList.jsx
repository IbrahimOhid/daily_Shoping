import React from "react";
import { getAllProduct } from "../data/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = getAllProduct();
  return (
    <div>
      <div className="relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#fb3909] dark:text-white mb-8 animate-bounce-slow">
            New Collection
          </h1>

          {/* Product Cards with Enhanced Design */}
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
