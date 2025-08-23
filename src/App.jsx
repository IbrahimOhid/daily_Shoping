import { useReducer, useState } from "react";
import { ProductContext, ThemeContext } from "./context";
import Page from "./Page";
import { initialValue, CartReducer } from "./reducer/product";
import { ToastContainer} from 'react-toastify';

function App() {
  const [state, dispatch] = useReducer(CartReducer, initialValue)
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <ProductContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer/>
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
