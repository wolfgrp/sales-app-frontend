import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import SalesmanLogin from './pages/SalesmanLogin';
import CustomerLogin from './pages/CustomerLogin';
import SalesOrder from './pages/SalesOrder';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/salesman-login" element={<SalesmanLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/sales-order" element={<SalesOrder />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
};

export default App;
