import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMessageCircle,
  FiClock,
  FiInstagram,
} from "react-icons/fi";

export default function Contact() {
  const businessHours = [
    { day: "Monday - Saturday", time: "10:00 AM - 8:00 PM" },
    { day: "Sunday", time: "Closed (By Appointment)" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white px-6 pt-28 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase"
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
              Touch
            </span>
          </motion.h1>
          <p className="text-gray-500 mt-4 tracking-widest uppercase text-xs font-bold">
            Premium Meerut Craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-pink-500/30 transition-colors">
                <FiPhone className="text-pink-500 mb-4" size={24} />
                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                <a
                  href="tel:9045904083"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 9045904083
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors">
                <FiMessageCircle className="text-purple-500 mb-4" size={24} />
                <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                <p className="text-gray-400">Orders & Inquiries</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <FiMapPin className="text-pink-500 mb-4" size={24} />
              <h3 className="font-bold text-lg mb-1">Visit Our Workshop</h3>
              <p className="text-gray-400 leading-relaxed">
                Near Nauchandi Police Station, <br />
                Shastri Nagar, Meerut, <br />
                Uttar Pradesh 250004
              </p>
            </div>

            {/* Hours Section */}
            <div className="p-6 rounded-2xl bg-linear-to-r from-pink-500/10 to-purple-500/10 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-pink-500" />
                <h3 className="font-bold text-lg">Business Hours</h3>
              </div>
              {businessHours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-gray-400">{item.day}</span>
                  <span className="text-white font-medium">{item.time}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919045904083?text=Hello%20SZ%20Cricket%2C%20I%20want%20to%20place%20an%20order",
                  "_blank",
                )
              }
              className="w-full py-4 bg-linear-to-r from-pink-500 to-purple-600 rounded-xl font-bold tracking-wide shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              START WHATSAPP ORDER
            </button>
          </div>

          {/* Right Column: Map Embed */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 grayscale-[0.8] hover:grayscale-0 transition-all duration-500">
            <iframe
              title="SZ Cricket Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.543545166299!2d77.7268!3d28.966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU3JzU3LjYiTiA3N8KwNDMnMzYuNSJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
