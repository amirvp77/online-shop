import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import Home from "../page/Home";
import NotFound from "../components/NotFound";
import About from "../page/About";
import Contact from "../page/Contact";
import Product from "../page/Product";
import ProductDetails from "../page/ProductDetails";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
