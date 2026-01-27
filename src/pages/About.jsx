import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCogs,
  FaTrophy,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaCogs className="text-pink-500" />,
      title: "Authentic Meerut Craftsmanship",
      desc: "Every bat is hand-selected and crafted in the workshops of Shastri Nagar, ensuring the perfect ping and balance.",
    },
    {
      icon: <FaTrophy className="text-purple-500" />,
      title: "Professional Grade",
      desc: "From Grade 1 English Willow to premium leather balls, we provide the same quality used by domestic and international pros.",
    },
    {
      icon: <FaHandshake className="text-pink-500" />,
      title: "Direct from the Hub",
      desc: "Being based in Meerut allows us to offer premium gear at competitive prices, cutting out the middleman.",
    },
    {
      icon: <FaUserTie className="text-purple-500" />,
      title: "Expert Advice",
      desc: "Whether you are a heavy-hitter or a technical batsman, our team helps you pick the gear that suits your playing style.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white pt-24 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-purple-600">
            About SZ Cricket
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Located in the heart of the world's cricket manufacturing hub—
            <span className="text-white font-semibold">
              Shastri Nagar, Meerut
            </span>
            —SZ Cricket brings you the finest professional gear straight from
            the source. We don't just sell equipment; we deliver the
            craftsmanship that Meerut is legendary for.
          </p>
        </motion.div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Visit Store Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-r from-pink-500/10 to-purple-600/10 border border-white/10 p-10 text-center"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FaMapMarkerAlt size={120} />
          </div>

          <h2 className="text-3xl font-bold mb-4 text-white">
            Visit Our Store
          </h2>
          <p className="text-gray-300 mb-6">
            If you're in the city, come visit us to feel the wood and find your
            perfect match:
          </p>

          <div className="inline-block bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5">
            <p className="text-2xl font-bold text-pink-500">SZ Cricket Store</p>
            <p className="text-gray-200 mt-2">
              Shastri Nagar, Meerut, Uttar Pradesh
            </p>
            <p className="text-sm text-gray-400 mt-4 italic">
              "Trusted by local clubs and professional athletes."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
