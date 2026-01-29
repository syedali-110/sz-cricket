import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import logo from "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Define the working URL here to ensure consistency
  const instagramURL = "https://www.instagram.com/szcricketofficial";

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
          {/* LEFT: LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="SZ Cricket Logo"
              className="h-14 w-auto object-contain"
            />
            <h1 className="text-white text-xl font-bold">SZ Cricket</h1>
          </Link>

          {/* RIGHT SECTION: LINKS AND INFO STACKED */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end gap-1">
              {/* 1. Desktop Navigation Links */}
              <div className="flex gap-8 text-gray-300 font-medium mb-1">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* 2. Contact Info (Including Instagram) */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.google.com/maps?q=Meerut"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[12px] transition-colors"
                >
                  <HiOutlineLocationMarker className="text-pink-500" />
                  <span>Meerut, India</span>
                </a>
                <a
                  href="tel:+919045904083"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[12px] transition-colors"
                >
                  <HiOutlinePhone className="text-purple-500" />
                  <span>+91 9045904083</span>
                </a>

                {/* FIXED: Corrected handle for Desktop View */}
                <a
                  href={instagramURL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[12px] transition-colors"
                >
                  <FaInstagram className="text-pink-600" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <h2 className="text-white text-xl font-bold">SZ Cricket</h2>
            </div>
            <button
              className="text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg text-gray-200">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} to="/products">
              Products
            </Link>
            <Link onClick={() => setOpen(false)} to="/about">
              About Us
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </nav>

          {/* MOBILE CONTACT SECTION */}
          <div className="mt-10 pt-10 border-t border-white/10 space-y-5">
            <div className="flex items-center gap-4 text-gray-300">
              <HiOutlineLocationMarker className="text-pink-500 text-2xl" />
              <p className="text-sm">Meerut, Uttar Pradesh, India</p>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <HiOutlinePhone className="text-purple-500 text-2xl" />
              <a href="tel:+919045904083" className="text-sm">
                +91 9045904083
              </a>
            </div>

            {/* FIXED: Corrected handle for Mobile View */}
            <div className="flex items-center gap-4 text-gray-300">
              <FaInstagram className="text-pink-600 text-2xl" />
              <a
                href={instagramURL}
                target="_blank"
                rel="noreferrer"
                className="text-sm cursor-pointer hover:text-white transition-colors"
              >
                @szcricketofficial
              </a>
            </div>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/919045904083?text=Hello%20SZ%20Cricket",
                "_blank",
              )
            }
            className="mt-10 w-full py-4 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-xl" /> Order on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
