import React, { useState } from "react";
import { getImageUrl } from "../utility/Utilities";
import Rating from "./Rating";
import ProductModalDetails from "./ProductModalDetails";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteModal = ()=>{
    setShowModal(false)
  }
  return (
      <>
      {
        showModal && <ProductModalDetails product={product} onDeleteModal = {handleDeleteModal}/>
      }
      <div href="" onClick={()=>setShowModal(true)}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            src={getImageUrl(product.cover)}
            alt={product.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
              {product.title}
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-primary-600 font-bold">$ {product.price}</p>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                {product.tag}
              </span>
            </div>
            <Rating value={product.rating} />
            <button className="mt-4 w-full bg-[#fb3909] text-white py-2 px-4 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
    </>
  );
};

export default ProductCard;
