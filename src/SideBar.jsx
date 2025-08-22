import React from "react";
import {
  House,
  ShoppingCart,
  PackageSearch,
  ClipboardCheck,
  ReceiptText,
} from "lucide-react";

const SideBar = () => {
  return (
    <div>
      <aside className="w-64 h-screen fixed top-0 left-0 z-50 shadow-xl mt-14">
        <nav className="mt-5 px-2">
          <a
            href="#"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md bg-indigo-100 text-[#fb3909] "
          >
            <House className="mr-3" color="#fb3909" />
            HOME
          </a>

          <a
            href="#"
            className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#fb3909]"
          >
            <ShoppingCart className="mr-3 text-gray-400 group-hover:text-[#fb3909]" />
            SHOP
          </a>

          <a
            href="#"
            className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#fb3909]"
          >
            <PackageSearch className="mr-3 text-gray-400 group-hover:text-[#fb3909]" />
            PRODUCT
          </a>

          <a
            href="#"
            className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#fb3909]"
          >
            <ClipboardCheck className="mr-3 text-gray-400 group-hover:text-[#fb3909]" />
            CART
          </a>

          <a
            href="#"
            className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-[#fb3909]"
          >
            <ReceiptText className="mr-3 text-gray-400 group-hover:text-[#fb3909]" />
            CHECKOUT
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
