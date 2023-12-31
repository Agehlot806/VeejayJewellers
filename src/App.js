import React, { useEffect } from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/home";
import Bangle from "./components/productPages/bangle";
import Necklaces from "./components/productPages/necklaces";
import Chains from "./components/productPages/chains";
import Ring from "./components/productPages/ring";
import Earrings from "./components/productPages/earrings";
import Bracelets from "./components/productPages/bracelets";
import About from "./components/pages/about";
import HelpandFAQs from "./components/pages/helpandFAQs";
import Offersdetails from "./components/pages/offers-details";
import Contact from "./components/pages/contact";
import Women from "./components/catalogue/women";
import Men from "./components/catalogue/men";
import Kids from "./components/catalogue/kids";
import Blog from "./components/pages/blog";
// import ARHA from "./components/Brands/ARHA";
// import VDANA from "./components/Brands/VDANA";
import Login from "./components/pages/login";
import SignupUser from "./components/pages/signupUser";
import SignupWholesaler from "./components/pages/signupWholesaler";
import Customdesign from "./components/pages/custom-design";
import Allproduct from "./components/pages/all-product";
import Productvariety from "./components/pages/product-variety";
import ProductDetails from "./components/pages/productDetails";
// import IRKA from "./components/Brands/IRKA";
import Productlock from "./components/pages/product-lock";
import Calculator from "./components/pages/calculator";
import Forgotpassword from "./components/pages/forgot-password";
import Profile from "./components/pages/Profile";
import Addcart from "./components/pages/add-cart";
import Checkinvoice from "./components/pages/checkinvoice";
import Orderinvoice from "./components/pages/orderinvoice";
import Product from "./components/pages/product";
import Blogdetails from "./components/pages/blog-details";
import Demo from "./components/pages/demo";
import Shipping from "./components/pages/shipping";
import OrderSuccess from "./components/pages/orderSucuss";
import Favouriteproduct from "./components/pages/favourite-product";
import Customorder from "./components/pages/custom-order";
// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = ({ item }) => {
  // useEffect(() => {
  //   const disableRightClick = (e) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener('contextmenu', disableRightClick);
  //   return () => {
  //     document.removeEventListener('contextmenu', disableRightClick);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/helpandFAQs" element={<HelpandFAQs />} />
          <Route path="/offers-details" element={<Offersdetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details/:id" element={<Blogdetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp-user" element={<SignupUser />} />
          <Route path="/signUp-wholesaler" element={<SignupWholesaler />} />
          <Route path="/custom-design" element={<Customdesign />} />
          <Route path="/all-products" element={<Allproduct />} />
          <Route path="/products/:name" element={<Product item={item} />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-variety" element={<Productvariety />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/add-to-cart" element={<Addcart />} />
          <Route path="/check-invoice" element={<Checkinvoice />} />
          <Route path="/order-invoice/:id" element={<Orderinvoice />} />
          <Route path="/product-lock" element={<Productlock />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/ordersuccessfully" element={<OrderSuccess />} />
          <Route path="/favourite-product" element={<Favouriteproduct />} />
          <Route path="/custom-order" element={<Customorder />} />

          {/* Brands pages */}
          {/* <Route path="/brands" element={<ARHA item={item} />} /> */}
          {/* <Route path="/ARHA-brands" element={<ARHA />} /> */}
          {/* <Route path="/VDANA-brands" element={<VDANA />} /> */}
          {/* <Route path="/IRKA-brands" element={<IRKA />} /> */}

          {/* Product pages */}
          <Route path="/bangles" element={<Bangle />} />
          <Route path="/nacklaces" element={<Necklaces />} />
          <Route path="/chains" element={<Chains />} />
          <Route path="/rings" element={<Ring />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/shipping" element={<Shipping />} />

          {/* Catalogue */}
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
