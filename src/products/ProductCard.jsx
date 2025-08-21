import React from "react";
import { getImageUrl } from "../utility/Utilities";

const ProductCard = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            src={getImageUrl(product.cover)}
            alt={products.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
              {product.title}
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-primary-600 font-bold">$ {product.price}</p>
              <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                {product.tag}
              </span>
            </div>
            <button className="mt-4 w-full bg-[#fb3909] text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
