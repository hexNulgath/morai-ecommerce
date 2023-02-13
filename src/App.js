import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";

import Home from "./pages/home";
import ProductDetail from "./pages/productdetail";
import Categories from "./pages/categories";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/categories/:category" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
