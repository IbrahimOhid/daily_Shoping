import React from "react";
import { ShoppingBag } from "lucide-react";
const Footer = () => {
  return (
    <div className="text-center py-5">
      <a
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
      >
        <ShoppingBag color="#fb3909" />
        <span className="font-bold text-xl text-[#fb3909]">DailyShopping</span>
      </a>
      <span className="block text-sm text-center">
        © 2025 MI™. All Rights Reserved. Built with Mohammad Ibrahim .
      </span>
    </div>
  );
};

export default Footer;
