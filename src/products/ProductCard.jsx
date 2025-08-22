import React, { useContext, useState } from "react";
import { getImageUrl } from "../utility/Utilities";
import Rating from "./Rating";
import ProductModalDetails from "./ProductModalDetails";
import { ProductContext } from "../context";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { cartData, setCartData } = useContext(ProductContext);

  const handleAddProduct = (e, product) => {
    e.stopPropagation();
    const findProduct = cartData.find((item) => item.id === product.id);
    if (!findProduct) {
      setCartData([...cartData, product]);
    } else {
      alert("added");
    }
  };

  const handleDeleteModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <ProductModalDetails
          product={product}
          onAddProduct={handleAddProduct}
          onDeleteModal={handleDeleteModal}
        />
      )}
      <a
        href="#"
        onClick={() => setShowModal(true)}
        className=" rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
      >
        <img
          src={getImageUrl(product.cover)}
          alt={product.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-primary-600 font-bold">$ {product.price}</p>
            <span className="bg-purple-100 text-teal-800 px-2 py-1 rounded-full text-xs">
              {product.tag}
            </span>
          </div>
          <Rating value={product.rating} />
          <button
            type="button"
            onClick={(e) => handleAddProduct(e, product)}
            className="mt-4 w-full bg-[#fb3909] text-white py-1 px-4 rounded-lg cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
