import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ExternalLink,
  Globe,
  Package,
  ShieldCheck,
} from "lucide-react";
import heroImg from "/hero.jpg"; // Vite assumes / is the public folder
import ProductModal from "./ProductModal";
import { RiCustomerService2Fill } from "react-icons/ri";

// --- BRANDS DATA ---
const brands = [
  { name: "MRF", logo: "/mrf.webp" },
  { name: "SS Ton", logo: "/ss-ton.webp" },
  { name: "SG", logo: "/sg.webp" },
  { name: "Gray Nicolls", logo: "/gray-nicolls.png" },
  { name: "SF", logo: "/sf.png" },
  { name: "New Balance", logo: "/nb.webp" },
  { name: "SS", logo: "/ss.webp" },
  { name: "DSC", logo: "/dsc.png" },
  { name: "GM", logo: "/gm.png" },
  { name: "KOKKABURRA", logo: "/kookaburra.png" },
  { name: "CEAT", logo: "/ceat.png" },
];

const featuredCategories = [
  {
    id: 1,
    name: "Cricket Bats",
    slug: "bats",
    discount: "UPTO 31% OFF",
    image: "/home-english.jpg",
  },
  {
    id: 2,
    name: "Batting Gloves",
    slug: "protection",
    discount: "UPTO 20% OFF",
    image: "/gloves.jpg",
  },
  {
    id: 3,
    name: "Batting Leg Guards",
    slug: "protection",
    discount: "UPTO 20% OFF",
    image: "/leg-guards.jpg",
  },
  {
    id: 4,
    name: "Leather Balls",
    slug: "leather-balls",
    discount: "UPTO 15% OFF",
    image: "/redball2.jpg",
  },
];

const faqs = [
  {
    question: "Are English Willow Bats Expensive?",
    answer:
      "English Willow bats vary in price depending on the grade of the wood (Grade 1 to 4). While premium Grade 1 bats used by professionals are an investment, we offer a range of options to suit different budgets without compromising quality.",
  },
  {
    question: "Can Beginners Use English Willow Bats?",
    answer:
      "Absolutely! While beginners often start with Kashmir Willow due to lower costs, English Willow provides better ping and power. If a beginner is serious about the game, starting with a lower-grade English Willow bat can be very beneficial.",
  },
  {
    question: "How Do I Care For An English Willow Bat?",
    answer:
      "Proper maintenance involves oiling the blade with raw linseed oil and 'knocking-in' the bat thoroughly before match use. We also recommend using a scuff sheet to protect the face from moisture and surface cracks.",
  },
  {
    question: "Where Can I Buy English Willow Bats Online In India?",
    answer:
      "You can buy high-quality, authentic English Willow bats right here at SZ Cricket. We source our bats from Meerut, the hub of cricket manufacturing, ensuring you get the best performance at competitive prices.",
  },
  {
    question: "Why Choose English Willow Cricket Bats?",
    answer:
      "English Willow (Salix Alba Caerulea) is preferred globally because it is lightweight, tough, and possesses high compression properties, providing the best 'rebound' effect when striking the ball.",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // We search for the element with the ID matching the hash
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // The timeout is key: it pushes the scroll to the end of the execution queue
        // ensuring the browser doesn't "cancel" the scroll.
        const timer = setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [hash, location.pathname]);

  const handleWhatsAppInquiry = (productName) => {
    const message = encodeURIComponent(
      `Hello SZ Cricket! I am interested in ${productName}. Could you please provide more details?`,
    );
    window.open(`https://wa.me/919045904083?text=${message}`, "_blank");
  };

  const handleCategorySelection = (categoryLabel) => {
    navigate("/products", { state: { filter: categoryLabel } });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen pt-24 sm:pt-32 lg:pt-4 xl:pt-2 overflow-hidden bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_40%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
                Cricket Gear
              </span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Buy professional cricket bats, leather balls & accessories from
              Meerut’s trusted cricket store.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600 shadow-lg hover:scale-105 transition cursor-pointer font-bold"
              >
                Explore Products
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919045904083?text=Hello%20SZ%20Cricket",
                    "_blank",
                  )
                }
                className="px-8 py-4 rounded-full border border-white/40 hover:bg-white/10 transition cursor-pointer font-bold"
              >
                Contact Store
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center -mt-14 lg:mt-10"
          >
            <div className="rounded-3xl p-2 mt-8 lg:p-4">
              <img
                src={heroImg}
                alt="Cricket Store Preview"
                className="rounded-2xl w-full max-w-sm mx-auto lg:max-w-full"
              />
            </div>
            <div className="absolute -inset-4 bg-linear-to-r from-pink-500/20 to-purple-600/20 blur-3xl -z-10"></div>
          </motion.div>
        </div>
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          setActiveSub={handleCategorySelection}
        />
      </section>

      {/* --- CUSTOMIZATION SECTION --- */}
      <section className="relative w-full py-20 px-6 lg:px-20 border-y border-white/5 bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black overflow-hidden">
        {/* Subtle Background Glow Animation */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-black tracking-tighter leading-tight"
            >
              CREATE YOUR <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
                OWN WEAPON
              </span>
            </motion.h2>

            {/* Steps Row with Staggered Animation */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
              {[
                { step: "STEP 1", title: "Customise it" },
                { step: "STEP 2", title: "Personalise styling" },
                { step: "STEP 3", title: "Hit the crease!" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex flex-col">
                    <span className="text-pink-500 text-[10px] font-black tracking-widest">
                      {item.step}
                    </span>
                    <span className="text-white font-bold whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                  {i < 2 && (
                    <span className="hidden md:block text-pink-500/50 text-2xl">
                      →
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              onClick={() =>
                window.open(
                  `https://wa.me/919045904083?text=I%20want%20to%20customize%20my%20own%20bat`,
                  "_blank",
                )
              }
              className="px-12 py-5 bg-linear-to-r from-pink-500 to-purple-600 rounded-xl font-black text-sm uppercase tracking-widest hover:brightness-130 transition-all cursor-pointer shadow-[0_20px_40px_rgba(236,72,153,0.2)]"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Side - Floating Image Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-auto md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="/customize.png"
                alt="Custom Cricket Bat Manufacturing"
                className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- BRAND LOGO ROTATING SECTION (Modern & Bold) --- */}
      <section
        id="brands-section"
        className="relative py-20 overflow-hidden border-y border-white/5 bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black"
      >
        {/* Decorative elements for a modern feel */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.03),transparent_70%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              TRUSTED BY{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
                THE BEST
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-linear-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">
              Authenticity Guaranteed – Meerut to the World
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center">
          {/* Masking the edges for a smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0f0f0f] to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-20"></div>

          <motion.div
            className="flex gap-24 items-center whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-40 h-28 group"
              >
                <div className="relative">
                  {/* Subtle hover glow behind logo */}
                  <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="relative max-w-full max-h-20 object-contain pointer-events-none 
                               filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] 
                               brightness-110 contrast-110 
                               group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- GEAR UP SECTION (Modern Glassmorphism) --- */}
      <section className="relative py-24 px-6 bg-linear-to-br from-black via-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-linear-to-r from-transparent via-pink-500/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              GEAR UP &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
                DOMINATE
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg font-medium">
              Professional Grade Equipment Sourced Directly From Meerut’s Finest
              Craftsmen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col"
              >
                {/* Modern Card with Glass Effect */}
                <div className="relative w-full aspect-[4/5] bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md transition-all duration-500 group-hover:border-pink-500/40 group-hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)]">
                  {/* Floating Discount Tag */}
                  <div className="absolute top-5 left-5 bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full z-20 shadow-xl">
                    {cat.discount}
                  </div>

                  {/* Main Image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  />

                  {/* Hover Overlay with Buttons */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent flex flex-col items-center justify-end pb-10 gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => handleWhatsAppInquiry(cat.name)}
                      className="w-[80%] py-3 bg-white text-black rounded-xl text-xs font-black shadow-lg hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      ENQUIRE NOW <ExternalLink size={14} />
                    </button>
                    <button
                      onClick={() => navigate(`/products?category=${cat.slug}`)}
                      className="w-[80%] py-3 bg-white/10 border border-white/20 text-white rounded-xl text-xs font-black backdrop-blur-md hover:bg-white/20 transition cursor-pointer"
                    >
                      VIEW ALL
                    </button>
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-white/90 group-hover:text-pink-500 transition-colors">
                  {cat.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE HIGHLIGHTS SECTION --- */}
      <section className="relative py-20 px-6 bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "7 Days Customer Care",
                desc: "We're here to help daily from 10am to 6pm.",
                icon: <RiCustomerService2Fill />,
              },
              {
                title: "7-Day Return Window",
                desc: "Not satisfied? Return within 7 days for a refund.",
                icon: <Package />,
              },
              {
                title: "Our Guarantee",
                desc: "We stand behind our products. 100% genuine gear.",
                icon: <ShieldCheck />,
              },
              {
                title: "Shipping Worldwide",
                desc: "Making professional gear accessible everywhere.",
                icon: <Globe />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center group transition-all hover:bg-white/[0.05] hover:border-purple-500/30"
              >
                <div className="flex justify-center text-4xl mb-6 text-gray-400 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black mb-3 tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (High-Contrast Theme) --- */}
      <section
        id="faq-section"
        className="relative py-24 px-6 bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-linear-to-r from-transparent via-purple-500/30 to-transparent"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              GOT{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
                QUESTIONS?
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`group border rounded-3xl overflow-hidden transition-all duration-500 ${
                  openFaq === index
                    ? "border-pink-500/50 bg-white/5 shadow-[0_0_40px_rgba(236,72,153,0.05)]"
                    : "border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-7 text-left cursor-pointer"
                >
                  <span
                    className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${
                      openFaq === index ? "text-pink-500" : "text-gray-300"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-2xl transition-all duration-500 ${
                      openFaq === index
                        ? "bg-pink-500 text-white rotate-180"
                        : "bg-white/5 text-gray-500"
                    }`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div className="px-7 pb-8 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
