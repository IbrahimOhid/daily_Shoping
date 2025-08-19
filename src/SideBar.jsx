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
    <div className="flex overflow-auto">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md ">
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
            CHECKOUT
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
      {/* Main Content */}
      <main>
        <div className="relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-[#fb3909] dark:text-white mb-8 animate-bounce-slow">
              New Collection
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product Cards with Enhanced Design */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
                  alt="Casual Wear"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                    Casual Wear
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary-600 font-bold">₹99.99</p>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                      New
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Additional Product Cards with Similar Enhanced Design */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
                  alt="Summer Collection"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                    Summer Collection
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary-600 font-bold">₹79.99</p>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Sale
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Two More Product Cards */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
                  alt="Winter Special"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                    Winter Special
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary-600 font-bold">₹129.99</p>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      Limited
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp"
                  alt="Premium Collection"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                    Premium Collection
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary-600 font-bold">₹199.99</p>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                      Premium
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SideBar;
