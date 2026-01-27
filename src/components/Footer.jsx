import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "919045904083";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20SZ%20Cricket!`;

  return (
    <footer className="relative bg-[#0a0a0a] text-gray-400 pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-purple-600/5 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter text-white">
              SZ{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
                CRICKET
              </span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Directly from Meerut’s manufacturing hub. We provide
              professional-grade English Willow bats and gear for athletes who
              demand excellence.
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <span className="text-pink-500">📍</span> Shastri Nagar, Meerut
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-500">📞</span>
                <a
                  href={`tel:${whatsappNumber}`}
                  className="hover:text-white transition-colors"
                >
                  +91 {whatsappNumber}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Shop */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em]">
              Quick Shop
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  to="/products"
                  className="hover:text-pink-500 transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq-section"
                  className="hover:text-pink-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/#brands-section" 
                  className="hover:text-pink-500 transition-colors"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* New Legal & Policy Section */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em]">
              Legal & Policy
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  to="/return-policy"
                  className="hover:text-pink-500 transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-pink-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="hover:text-pink-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="hover:text-pink-500 transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Connectivity */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em]">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaWhatsapp />,
                  link: whatsappLink,
                  color: "hover:text-green-500",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com/szcricketofficial",
                  color: "hover:text-pink-500",
                },
                {
                  icon: <FaFacebookF />,
                  link: "#",
                  color: "hover:text-blue-500",
                },
                { icon: <FaYoutube />, link: "#", color: "hover:text-red-500" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 bg-white/[0.03] border border-white/5 rounded-2xl ${social.color} transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold tracking-widest uppercase">
          <p>© 2026 SZ CRICKET. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Secure Payments</span>
            <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
              {/* Add small payment icons here if needed */}
              <span>VISA</span> <span>UPI</span> <span>MC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
}
