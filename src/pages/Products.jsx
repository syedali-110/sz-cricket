import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Products() {
  const location = useLocation();

  // 1. Updated Initial State to include Accessories default
  const [activeSubs, setActiveSubs] = useState({
    "Cricket Bats": location.state?.filter || "English Willow",
    "Leather Balls": "Red Leather Balls",
    Protection: "Leg Guards",
    Accessories: "Kit Bags", // Default sub-category for Accessories
  });

  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const categories = [
    "Cricket Bats",
    "Leather Balls",
    "Protection",
    "Accessories",
  ];

  // 2. Sub-category Arrays
  const batSubCategories = ["English Willow", "Kashmir Willow", "Tennis Bats"];
  const ballSubCategories = ["Red Leather Balls", "White Leather Balls"];
  const protectionSubCategories = [
    "Leg Guards",
    "Batting Gloves",
    "Helmets",
    "Thigh Pads",
  ];
  const accessoriesSubCategories = ["Kit Bags", "Bat Grips", "Scuff Sheets"];

  useEffect(() => {
    if (location.state?.filter) {
      const f = location.state.filter;
      if (batSubCategories.includes(f)) {
        setActiveSubs((p) => ({ ...p, "Cricket Bats": f }));
        setOpenCategory("Cricket Bats");
      } else if (ballSubCategories.includes(f)) {
        setActiveSubs((p) => ({ ...p, "Leather Balls": f }));
        setOpenCategory("Leather Balls");
      } else if (protectionSubCategories.includes(f)) {
        setActiveSubs((p) => ({ ...p, Protection: f }));
        setOpenCategory("Protection");
      } else if (accessoriesSubCategories.includes(f)) {
        // Handle incoming Accessories filters
        setActiveSubs((p) => ({ ...p, Accessories: f }));
        setOpenCategory("Accessories");
      } else if (categories.includes(f)) {
        setOpenCategory(f);
      }
    }
  }, [location.state]);

  const handleSubChange = (category, sub) => {
    setActiveSubs((prev) => ({ ...prev, [category]: sub }));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white px-4 md:px-8 pt-24 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
          Pro{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
            Inventory
          </span>
        </h1>
        <p className="text-[10px] tracking-[0.4em] text-gray-500 mt-2 uppercase font-bold">
          Premium Meerut Craftsmanship
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-4">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (p) => p.category === category,
          );
          if (categoryProducts.length === 0) return null;

          // 3. Updated Logic: Accessories now has a subheading switcher
          const hasSubheading = true; // Every category now has sub-categories

          // Logic to select the correct array for the UI switcher
          let currentSubList = [];
          if (category === "Cricket Bats") currentSubList = batSubCategories;
          else if (category === "Leather Balls")
            currentSubList = ballSubCategories;
          else if (category === "Protection")
            currentSubList = protectionSubCategories;
          else if (category === "Accessories")
            currentSubList = accessoriesSubCategories;

          const currentActive = activeSubs[category];
          const isOpen = openCategory === category;

          return (
            <div
              key={category}
              className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                isOpen
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-white/5 bg-white/[0.01] hover:bg-white/[0.02]"
              }`}
            >
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-5 md:p-6 outline-none cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-1 h-4 rounded-full transition-all ${isOpen ? "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" : "bg-white/10"}`}
                  />
                  <h2
                    className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}
                  >
                    {category}
                  </h2>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className={isOpen ? "text-pink-500" : "text-gray-600"}
                >
                  <FiChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/5"
                  >
                    <div className="p-5 md:p-8">
                      {hasSubheading && (
                        <div className="flex flex-wrap gap-2 mb-8 bg-black/40 p-1.5 rounded-xl w-fit border border-white/5">
                          {currentSubList.map((sub) => (
                            <button
                              key={sub}
                              onClick={() => handleSubChange(category, sub)}
                              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                currentActive === sub
                                  ? "bg-white text-black shadow-lg"
                                  : "text-gray-500 hover:text-white"
                              }`}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6">
                        {categoryProducts
                          .filter((p) => p.subCategory === currentActive)
                          .map((product) => (
                            <div
                              key={product.id}
                              className="scale-[0.98] hover:scale-100 transition-transform duration-300"
                            >
                              <ProductCard product={product} />
                            </div>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
