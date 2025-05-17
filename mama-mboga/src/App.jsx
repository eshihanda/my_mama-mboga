import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import Home from "./Pages/Home";
import Vendors from "./Pages/Vendors";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import VendorProducts from "./Pages/VendorProducts";

function App() {
  return (
    <>
      <TopNav />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="vendors/:vendorId/products" element={<VendorProducts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
