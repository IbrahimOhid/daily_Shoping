import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./products/ProductList";
import SideBar from "./SideBar";
import { ThemeContext } from "./context";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <div className="flex overflow-auto justify-between">
        <SideBar />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
