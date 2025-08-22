import { useState } from "react";
import { ProductContext, ThemeContext } from "./context";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <ProductContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
