import React, { useContext } from "react";
import { ProductContext, ThemeContext } from "../context";
import Rating from "./Rating";
import { getImageUrl } from "../utility/Utilities";
import { Trash2, TicketPercent, X } from "lucide-react";
import { toast } from "react-toastify";

const CartDetails = ({ onHideCart }) => {
  const { state, dispatch } = useContext(ProductContext);
  const handleDeleteProduct = (removeProduct) => {
    dispatch({
      type: "REMOVE_CART",
      payload: removeProduct,
    });
    toast.warn("Product Removed Successfully !", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div
          className={`w-full h-full ${
            darkMode ? "dark" : "bg-white"
          } shadow-md  rounded-2xl overflow-hidden p-5 md:p-9`}
        >
          <h2 className="text-2xl lg:text-[30px] mb-5 font-bold">Your Carts</h2>
          {state.cartData.length === 0 ? (
            <div>
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <X className="text-red-500" />
              </div>
              <h1 className="text-red-500 text-center mb-5 font-semibold text-2xl">
                No Product Found !
              </h1>
            </div>
          ) : (
            <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14 pr-2">
              {state.cartData.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-[1fr_auto] gap-4 border p-2 rounded-lg border-[#fb3909]"
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="rounded overflow-hidden"
                      src={getImageUrl(product.cover)}
                      alt=""
                      width={120}
                      height={100}
                    />
                    <div>
                      <h3 className="text-base md:text-xl font-bold">
                        {product.title}
                      </h3>
                      <Rating value={product.rating} />
                      <div className="  font-semibold text-sm mt-2" href="#">
                        <span>$ {product.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <a
                      onClick={() => handleDeleteProduct(product)}
                      href="#"
                      className="bg-red-500 rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    >
                      <Trash2 />
                      <span className="max-md:hidden">Remove</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-end gap-2">
            <a
              className="text-white  bg-green-500 rounded-lg py-2 px-5 flex items-center justify-center gap-2  font-semibold text-sm"
              href="#"
            >
              <TicketPercent />

              <span>Checkout</span>
            </a>
            <a
              onClick={onHideCart}
              className="text-white  bg-red-500 rounded-lg py-2 px-5 flex items-center justify-center gap-2  font-semibold text-sm"
              href="#"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
