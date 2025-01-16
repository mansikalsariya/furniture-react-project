import React, { useState } from "react";  // Add useState import here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFoundPage from "./pages/NotFoundPage";
import Shop from "./pages/Shop";
import ContactUs from "./pages/Contact";  // Make sure this matches the export
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import { myContext } from './common/Context';
import PrivateRoute from './common/PrivateRoute';
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [state, setState] = useState({
    user: 'guest user',
    isLogged: false
  });

  function fnLogged(data) {
    setState(data);
  }

  return (
    <myContext.Provider value={{ state, fnLogged }}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </myContext.Provider>
  );
};

export default App;
