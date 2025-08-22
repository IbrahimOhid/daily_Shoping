import React from "react";
import { getAllProduct } from "../data/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = getAllProduct();
  return (
    <div>
      <div className="relative mt-14">
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#fb3909] mb-8 animate-bounce-slow">
            New Collection
          </h1>

          {/* Product Cards with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
