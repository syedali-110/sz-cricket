import React from "react";
import { motion } from "framer-motion";
import { Lock, Eye, FileText, ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const highlights = [
    {
      title: "Data Protection",
      desc: "We use industry-standard encryption to protect your personal information.",
      icon: <Lock className="text-pink-500" />,
    },
    {
      title: "Transparency",
      desc: "We are open about what data we collect and how we use it to serve you.",
      icon: <Eye className="text-purple-500" />,
    },
    {
      title: "Secure Payments",
      desc: "Your payment details are processed securely and never stored on our servers.",
      icon: <ShieldCheck className="text-pink-500" />,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            PRIVACY <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">POLICY</span>
          </h1>
          <div className="w-24 h-1.5 bg-linear-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your trust is our most valuable asset. Learn how SZ Cricket handles and protects your information.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, idx) => (
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

        {/* Policy Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText size={24} className="text-pink-500" /> Information We Collect
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              When you visit SZ Cricket or make a purchase, we collect certain information to provide a better shopping experience:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 pl-2">
              <li>Personal details (Name, Email, Phone Number)</li>
              <li>Shipping and Billing addresses</li>
              <li>Device information (IP address, Browser type)</li>
              <li>Order history and preferences</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Data</h2>
            <p className="text-gray-400 leading-relaxed">
              We use your information to process orders, arrange for shipping, and provide you with invoices and/or order confirmations. Additionally, we use this information to communicate with you and screen our orders for potential risk or fraud.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Sharing Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              We do not sell your personal data. We only share your information with third parties who help us use your personal information, as described above (e.g., shipping carriers like BlueDart/Delhivery or payment gateways).
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              You have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the information below.
            </p>
          </section>
        </motion.div>

        {/* Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Have questions about your data?</p>
          <button 
            onClick={() => window.open("mailto:support@szcricket.com", "_blank")}
            className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all cursor-pointer"
          >
            Email Data Protection Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;