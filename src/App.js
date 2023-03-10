import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";

import Home from "./pages/home";
import ProductDetail from "./pages/productdetail";
import Categories from "./pages/categories";
import { CartProvider } from "./context/cartContext";
import Cart from "./pages/cart";
import FormContainer from "./pages/formContainer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/categories/:category" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/formContainer" element={<FormContainer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
