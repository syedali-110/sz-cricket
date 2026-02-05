import React from "react";
import { motion } from "framer-motion";
import { RotateCcw, ShieldCheck, AlertCircle, Clock } from "lucide-react";

const ReturnPolicy = () => {
  const policies = [
    {
      title: "7-Day Return Window",
      desc: "If you're not satisfied with your purchase, simply return it within 7 days for a refund (T&C apply).",
      icon: <Clock className="text-pink-500" />,
    },
    {
      title: "Genuine Guarantee",
      desc: "We stand behind our products and services. We guarantee 100% genuine products.",
      icon: <ShieldCheck className="text-purple-500" />,
    },
    {
      title: "Customer Support",
      desc: "Our team is here to help with any return questions daily from 10am to 6pm.",
      icon: <RotateCcw className="text-pink-500" />,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            RETURN <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">POLICY</span>
          </h1>
          <div className="w-24 h-1.5 bg-linear-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            At SZ Cricket, we prioritize your satisfaction. Our return process is designed to be as transparent as our quality.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {policies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Terms Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertCircle size={24} className="text-pink-500" /> Eligibility for Returns
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-3 pl-2">
              <li>Items must be returned within the 7-day window following delivery.</li>
              <li>Cricket bats must not be oiled or knocked-in if they are being returned for non-performance issues.</li>
              <li>Products must be in their original packaging with all tags and authenticity certificates intact.</li>
              <li>Personalized or custom-made gear cannot be returned unless there is a manufacturing defect.</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Refund Process</h2>
            <p className="text-gray-400 leading-relaxed">
              Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed to the original method of payment within 5-7 business days.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Shipping Costs</h2>
            <p className="text-gray-400 leading-relaxed">
              Customers are responsible for paying their own shipping costs for returning items unless the product received was damaged or incorrect. Shipping costs are non-refundable.
            </p>
          </section>
        </motion.div>

        {/* Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Need help with a return?</p>
          <button 
            onClick={() => window.open("https://wa.me/918979997715", "_blank")}
            className="px-10 py-4 rounded-2xl bg-linear-to-r from-pink-500 to-purple-600 font-bold hover:scale-105 transition-transform cursor-pointer"
          >
            Contact Support via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;