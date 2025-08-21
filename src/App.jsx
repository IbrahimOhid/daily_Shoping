import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./products/ProductList";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <Header />
      <div className="flex overflow-auto">
        <SideBar />
        <ProductList />
      </div>
      <Footer />
    </>
  );
}

export default App;
