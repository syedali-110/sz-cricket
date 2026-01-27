import React from "react";
import { motion } from "framer-motion";
import { Scale, Gavel, ShoppingBag, Truck } from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By accessing SZ Cricket, you agree to be bound by these Terms and Conditions. If you disagree with any part, you may not access our services.",
      icon: <Scale className="text-pink-500" />,
    },
    {
      title: "Product Accuracy",
      content: "We strive for 100% accuracy in product descriptions and images. However, since many of our bats are handcrafted in Meerut, slight variations in grain and weight may occur.",
      icon: <ShoppingBag className="text-purple-500" />,
    },
    {
      title: "Shipping & Delivery",
      content: "Delivery timelines are estimates. SZ Cricket is not responsible for delays caused by logistics partners, though we will assist in tracking and resolution.",
      icon: <Truck className="text-pink-500" />,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[20%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            TERMS & <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">CONDITIONS</span>
          </h1>
          <div className="w-24 h-1.5 bg-linear-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our platform. Your use of the site signifies your acceptance of these rules.
          </p>
        </motion.div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Legal Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-10"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Gavel size={24} className="text-pink-500" /> 1. Intellectual Property
            </h2>
            <p className="text-gray-400 leading-relaxed">
              All content including logos, designs, text, and images on this website are the exclusive property of **SZ Cricket**. Reproduction or unauthorized use of our brand assets is strictly prohibited and subject to legal action.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">2. Pricing & Payment</h2>
            <p className="text-gray-400 leading-relaxed">
              Prices for our products are subject to change without notice. We reserve the right to modify or discontinue a service at any time. We use secure third-party gateways for all payments and do not hold your sensitive financial information.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
            <p className="text-gray-400 leading-relaxed">
              You agree not to use the website for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. Violation of any terms will result in an immediate termination of your access to our services.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
            <p className="text-gray-400 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in **Meerut, Uttar Pradesh**.
            </p>
          </section>
        </motion.div>

        {/* Footer Note */}
        <p className="text-center text-gray-600 text-xs mt-12 tracking-widest uppercase">
          Last Updated: January 2026
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;