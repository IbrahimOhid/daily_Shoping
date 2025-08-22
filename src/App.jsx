import { ProductContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./products/ProductList";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <ProductContext.Provider>
        <Header />
      <div className="flex overflow-auto">
        <SideBar />
        <ProductList />
      </div>
      <Footer />
      </ProductContext.Provider>
    </>
  );
}

export default App;
