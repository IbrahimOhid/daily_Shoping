import React from "react";
import { getImageUrl } from "../utility/Utilities";
import Rating from "./Rating";

const ProductModalDetails = ({ product, onDeleteModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={getImageUrl(product.cover)}
            alt=""
          />
          <div className="p-5 lg:p-11">
            <div className="">
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                {product.title}
              </h2>
              <div className="flex justify-between items-center mt-2">
                <Rating value={product.rating} />
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  {product.tag}
                </span>
              </div>
              <div />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-2 mt-6">
              <a
                className="bg-[#fb3909] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm"
                href="#"
              >
                <span>$ {product.price} | Add to Cart</span>
              </a>
              <a
                onClick={onDeleteModal}
                className="text-white  bg-red-500 rounded-lg py-2 px-5 flex items-center justify-center gap-2  dark:text-gray-200 font-semibold text-sm"
                href="#"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalDetails;
