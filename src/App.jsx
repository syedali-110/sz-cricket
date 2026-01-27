import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import your pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReturnPolicy from "./pages/ReturnPolicy"; // IMPORT THIS
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ShippingPolicy from "./pages/ShippingPolicy";

export default function App() {
  return (
    <Router>
      {/* ScrollToTop handles the "jump to top" logic on every navigation */}
      <ScrollToTop />

      {/* Navbar is persistent across all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADD THIS ROUTE FOR THE RETURN POLICY */}
        <Route path="/return-policy" element={<ReturnPolicy />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Routes>

      {/* Footer is persistent across all pages */}
      <Footer />
    </Router>
  );
}
