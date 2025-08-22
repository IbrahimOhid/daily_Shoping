import React, { useContext, useState } from "react";
import {
  ShoppingBag,
  Handbag,
  SunMedium,
  SearchCheck,
  Moon,
} from "lucide-react";
import CartDetails from "./products/CartDetails";
import { ProductContext, ThemeContext } from "./context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(ProductContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleShowCart = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  return (
    <div>
      {showCart && <CartDetails onHideCart={() => setShowCart(false)} />}
      <header className=" fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0">
              <a href="#" title="" className="inline-flex">
                <ShoppingBag color="#fb3909" />
                <span className="font-bold text-xl text-[#fb3909]">
                  DailyShopping
                </span>
              </a>
            </div>

            <div className="flex items-center justify-end ml-auto">
              <div className="flex items-center justify-end space-x-5 gap-5">
                <a
                  href=""
                  type="button"
                  className="relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
                >
                  <SearchCheck color="#fb3909" />
                </a>
                <a
                  onClick={() => setDarkMode((darkMode) => !darkMode)}
                  type="button"
                  className="p-2 -m-2 text-gray-900 cursor-pointer transition-all duration-200 hover:text-gray-700"
                >
                  {darkMode ? (
                    <SunMedium color="#fb3909" />
                  ) : (
                    <Moon color="#fb3909" />
                  )}
                </a>
                <a
                  onClick={handleShowCart}
                  href=""
                  type="button"
                  className="relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
                >
                  <Handbag color="#fb3909" />
                  <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#fb3909] rounded-full">
                    {cartData.length}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
