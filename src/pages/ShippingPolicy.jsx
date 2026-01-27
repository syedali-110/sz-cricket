import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe, PackageCheck, MapPin } from "lucide-react";

const ShippingPolicy = () => {
  const deliverySteps = [
    {
      title: "Order Processing",
      desc: "Orders are processed within 24-48 hours. Custom bat knocking takes an additional 2-3 days.",
      icon: <PackageCheck className="text-pink-500" />,
    },
    {
      title: "Pan-India Shipping",
      desc: "Standard delivery across India within 5-7 business days via premium partners like Delhivery.",
      icon: <Truck className="text-purple-500" />,
    },
    {
      title: "Global Reach",
      desc: "We ship professional gear worldwide. International delivery typically takes 10-15 days.",
      icon: <Globe className="text-pink-500" />,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-pink-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            SHIPPING <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">INFO</span>
          </h1>
          <div className="w-24 h-1.5 bg-linear-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From our workshop in Meerut to your home ground. We ensure your gear arrives safe, secure, and ready for the crease.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {deliverySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Shipping Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MapPin size={24} className="text-pink-500" /> Dispatch Location
            </h2>
            <p className="text-gray-400 leading-relaxed">
              All orders are dispatched directly from our flagship store and warehouse in **Shastri Nagar, Meerut**. Being at the heart of the cricket manufacturing hub allows us to personally inspect every piece of equipment before it is boxed.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Tracking Your Order</h2>
            <p className="text-gray-400 leading-relaxed">
              Once your gear is dispatched, you will receive an SMS and Email containing your tracking number and a direct link to follow your shipment in real-time.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Packaging & Safety</h2>
            <p className="text-gray-400 leading-relaxed">
              We use heavy-duty, moisture-resistant corrugated boxes and industrial-grade bubble wrap to ensure that your English Willow bats are protected from temperature changes and impact during transit.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Customs & Duties (International)</h2>
            <p className="text-gray-400 leading-relaxed">
              For international orders, any customs duties or import taxes levied by the destination country are the responsibility of the customer. Please check your local regulations before ordering.
            </p>
          </section>
        </motion.div>

        {/* WhatsApp Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Need a custom shipping quote?</p>
          <button 
            onClick={() => window.open("https://wa.me/919045904083", "_blank")}
            className="px-10 py-4 rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 font-bold hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all cursor-pointer"
          >
            Chat with Logistics Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;